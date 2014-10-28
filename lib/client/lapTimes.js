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
                    else {
                        totalRows = response["MRData"]["Total"];
                        rowsObtained += config.maxResponseRows;
                        laps.push(response["MRData"]["RaceTable"]["Races"][0]["Laps"]);
                        callback();
                    }
                });
            },
            function() { return rowsObtained <= totalRows; },
            function(err) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, laps);
                }
            }
        );
    };

}

module.exports = LapTimes;