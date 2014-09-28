var getRequest = require('../utils/ergastHttpRequest');
var Race = require('../domain/races/race');

function Races(baseUrl) {

    this.getRace = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + ".json", function(err, response) {
            err ? callback(err, null) : callback(null, new Race(response["MRData"]["RaceTable"]["Races"][0]));
        });
    };

}

module.exports = Races;