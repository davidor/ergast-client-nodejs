var getRequest = require('../utils/ergastHttpRequest');
var QualifyingResult = require('../domain/qualifyingResults/qualifyingResults');

function QualifyingResults(baseUrl) {

    this.getQualifyingResults = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/qualifying.json", function(err, response) {
            err ? callback(err, null) : callback(null, new QualifyingResult(response["MRData"]["RaceTable"]
                    ["Races"][0]["QualifyingResults"]));
        });
    };

}

module.exports = QualifyingResults;