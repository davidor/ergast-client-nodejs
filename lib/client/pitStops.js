var getRequest = require('../utils/ergastHttpRequest');
var PitStop = require('../domain/pitStops/pitStop');
var PitStopList = require('../domain/pitStops/pitStopList');
var config = require('../config');

function PitStops(responsesValidator) {

    this.getPitStop = function(season, round, pitStop, callback) {
        var url = config.baseUrl + season + "/" + round + "/pitstops/" + pitStop + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round/pitStop.'));
            }
            else {
                callback(null, new PitStopList(response["MRData"]["RaceTable"]["Races"][0]["PitStops"]));
            }
        });
    };

    this.getDriverPitStop = function(season, round, pitStop, driverId, callback) {
        var url = config.baseUrl + season + "/" + round + "/drivers/"+ driverId + "/pitstops/" + pitStop + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round/pitStop/driverId.'));
            }
            else {
                callback(null, new PitStop(response["MRData"]["RaceTable"]["Races"][0]["PitStops"][0]));
            }
        });
    };

}

module.exports = PitStops;
