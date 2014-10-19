var getRequest = require('../utils/ergastHttpRequest');
var PitStop = require('../domain/pitStops/pitStop');
var PitStopList = require('../domain/pitStops/pitStopList');

function PitStops(baseUrl, responsesValidator) {

    this.getPitStop = function(season, round, pitStop, callback) {
        getRequest(baseUrl + season + "/" + round + "/pitstops/" + pitStop + ".json", function(err, response) {
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
        getRequest(baseUrl + season + "/" + round + "/drivers/"+ driverId + "/pitstops/" + pitStop + ".json",
                function(err, response) {
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
