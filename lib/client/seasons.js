var getRequest = require('../utils/ergastHttpRequest');
var Season = require('../domain/seasons/season');

function Seasons(baseUrl) {

    this.getSeason = function(season, callback) {
        getRequest(baseUrl + season + ".json", function(response) {
            callback(new Season(response["MRData"]["RaceTable"]["Races"]));
        });
    };

}

module.exports = Seasons;
