var getRequest = require('../utils/ergastHttpRequest');
var QualifyingResult = require('../domain/qualifyingResults/qualifyingResults');

function QualifyingResults(baseUrl, responsesValidator) {

    this.getQualifyingResults = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/qualifying.json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new QualifyingResult(response["MRData"]["RaceTable"]["Races"][0]["QualifyingResults"]));
            }
            err ? callback(err, null) : callback(null, new QualifyingResult(response["MRData"]["RaceTable"]
                    ["Races"][0]["QualifyingResults"]));
        });
    };

}

module.exports = QualifyingResults;