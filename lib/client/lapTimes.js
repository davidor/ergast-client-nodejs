var getRequest = require('../utils/ergastHttpRequest');
var Lap = require('../domain/lapTimes/lap');
var LapList = require('../domain/lapTimes/lapList');

function LapTimes(baseUrl) {

    this.getLap = function(season, round, lap, callback) {
        getRequest(baseUrl + season + "/" + round + "/laps/" + lap + ".json", function(response) {
            callback(new LapList(response["MRData"]["RaceTable"]["Races"][0]["Laps"][0]));
        });
    };

    this.getDriverLap = function(season, round, lap, driverId, callback) {
        getRequest(baseUrl + season + "/" + round + "/drivers/" + driverId + "/laps/" + lap + ".json",
                function(response) {
            callback(new Lap(response["MRData"]["RaceTable"]["Races"][0]["Laps"][0]["Timings"][0]));
        });
    };

}

module.exports = LapTimes;