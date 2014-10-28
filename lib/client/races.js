var getRequest = require('../utils/ergastHttpRequest');
var Race = require('../domain/races/race');
var config = require('../config');

function Races(responsesValidator) {

    this.getRace = function(season, round, callback) {
        var url = config.baseUrl + season + "/" + round + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
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