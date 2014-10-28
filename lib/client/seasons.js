var getRequest = require('../utils/ergastHttpRequest');
var Season = require('../domain/seasons/season');
var config = require('../config');

function Seasons(responsesValidator) {

    this.getSeason = function(season, callback) {
        var url = config.baseUrl + season + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new Season(response["MRData"]["RaceTable"]["Races"]));
            }
        });
    };

}

module.exports = Seasons;
