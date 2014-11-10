var async = require('async');
var getRequest = require('../utils/ergastHttpRequest');
var Lap = require('../domain/lapTimes/lap');
var LapList = require('../domain/lapTimes/lapList');
var config = require('../config');

function LapTimes(responsesValidator) {

    this.getLap = function(season, round, lap, callback) {
        var url = config.baseUrl + season + "/" + round + "/laps/" + lap + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round/lap.'));
            }
            else {
                callback(null, new LapList(response["MRData"]["RaceTable"]["Races"][0]["Laps"][0]));
            }
        });
    };

    this.getDriverLap = function(season, round, lap, driverId, callback) {
        var url = config.baseUrl + season + "/" + round + "/drivers/" + driverId + "/laps/" + lap + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round/lap/driverId.'));
            }
            else {
                callback(null, new Lap(response["MRData"]["RaceTable"]["Races"][0]["Laps"][0]["Timings"][0]));
            }
        });
    };

    this.getLaps = function(season, round, callback) {
        var laps = [];
        var rowsObtained = 0;
        var totalRows;
        async.doWhilst(
            function(callback) {
                var url = config.baseUrl + season + "/" + round + "/laps.json";
                getRequest(url, rowsObtained, config.maxResponseRows, function(err, response) {
                    if (err) {
                        callback(err);
                    }
                    else if (responsesValidator.responseWithoutRaces(response)) {
                        callback(new Error('Invalid season/round.'));
                    }
                    else {
                        totalRows = response["MRData"]["total"];
                        rowsObtained += config.maxResponseRows;
                        laps.push(response["MRData"]["RaceTable"]["Races"][0]["Laps"]);
                        callback();
                    }
                });
            },
            function() { return rowsObtained < totalRows; },
            function(err) {
                if (err) {
                    callback(err);
                }
                else {
                    /* Because of the multiple calls, the information of a particular lap can be split in
                    two different objects. We need to fix this before returning the result */
                    callback(null, fixSplitLaps(laps));
                }
            }
        );
    };

    function fixSplitLaps(splitLaps) {
        var arrayWithRepeatedElems = [];

        // Merge all the parts into one single array
        splitLaps.forEach(function(part) {
            arrayWithRepeatedElems = arrayWithRepeatedElems.concat(part);
        });

        // Merge the elements that belong to the same lap
        var arrayWithoutRepeatedElems = [];
        var index = 0;
        while (index < arrayWithRepeatedElems.length) { // last element or not repeated
            if (index === arrayWithRepeatedElems.length - 1
                    || arrayWithRepeatedElems[index].number !== arrayWithRepeatedElems[index+1].number) {
                arrayWithoutRepeatedElems.push(arrayWithRepeatedElems[index]);
                ++index;
            }
            else { // repeated element
                arrayWithRepeatedElems[index].Timings =
                    arrayWithRepeatedElems[index].Timings.concat(arrayWithRepeatedElems[index+1].Timings);
                arrayWithoutRepeatedElems.push(arrayWithRepeatedElems[index]);
                index += 2;
            }
        }

        // Create the array that contains the timings for all the laps
        var result = [];
        arrayWithoutRepeatedElems.forEach(function(lapInfo) {
           result.push(new LapList(lapInfo));
        });
        return result;
    }

}

module.exports = LapTimes;