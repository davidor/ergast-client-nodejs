var getRequest = require('../utils/ergastHttpRequest');
var RaceResult = require('../domain/raceResults/raceResults');

function RaceResults(baseUrl, responsesValidator) {

    this.getRaceResults = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/results.json", function(err, response) {
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
