var getRequest = require('../utils/ergastHttpRequest');
var RaceResult = require('../domain/raceResults/raceResults');
var config = require('../config');

function RaceResults(responsesValidator) {

    this.getRaceResults = function(season, round, callback) {
        var url = config.baseUrl + season + "/" + round + "/results.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new RaceResult(response["MRData"]["RaceTable"]["Races"][0]["Results"]));
            }
        });
    };

}

module.exports = RaceResults;
