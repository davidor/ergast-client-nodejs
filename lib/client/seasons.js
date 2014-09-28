var getRequest = require('../utils/ergastHttpRequest');
var Season = require('../domain/seasons/season');

function Seasons(baseUrl) {

    this.getSeason = function(season, callback) {
        getRequest(baseUrl + season + ".json", function(err, response) {
            err ? callback(err, null) : callback(null, new Season(response["MRData"]["RaceTable"]["Races"]));
        });
    };

}

module.exports = Seasons;
