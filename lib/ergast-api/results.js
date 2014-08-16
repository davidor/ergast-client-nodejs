var getRequest = require('./../httpRequest');

function Results(baseUrl) {
    this.getRaceResults = function (year, race, callback) {
        getRequest(baseUrl + year + "/" + race + "/results.json", callback);
    };

    this.getQualifyingResults = function(year, race, callback) {
        getRequest(baseUrl + year + "/" + race + "/qualifying.json", callback);
    };
}

module.exports = Results;