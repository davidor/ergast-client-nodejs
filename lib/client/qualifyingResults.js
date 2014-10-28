var getRequest = require('../utils/ergastHttpRequest');
var QualifyingResult = require('../domain/qualifyingResults/qualifyingResults');
var config = require('../config');

function QualifyingResults(responsesValidator) {

    this.getQualifyingResults = function(season, round, callback) {
        var url = config.baseUrl + season + "/" + round + "/qualifying.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new QualifyingResult(response["MRData"]["RaceTable"]["Races"][0]["QualifyingResults"]));
            }
        });
    };

}

module.exports = QualifyingResults;