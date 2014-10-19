var getRequest = require('../utils/ergastHttpRequest');
var Race = require('../domain/races/race');

function Races(baseUrl, responsesValidator) {

    this.getRace = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + ".json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new Race(response["MRData"]["RaceTable"]["Races"][0]));
            }
        });
    };

}

module.exports = Races;