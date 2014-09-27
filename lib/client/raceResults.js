var getRequest = require('../utils/ergastHttpRequest');
var RaceResult = require('../domain/raceResults/raceResults');

function RaceResults(baseUrl) {

    this.getRaceResults = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/results.json", function(response) {
            callback(new RaceResult(response["MRData"]["RaceTable"]["Races"][0]["Results"]));
        });
    }

}

module.exports = RaceResults;
