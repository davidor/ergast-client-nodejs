var getRequest = require('../utils/ergastHttpRequest');
var Season = require('../domain/seasons/season');

function Seasons(baseUrl, responsesValidator) {

    this.getSeason = function(season, callback) {
        getRequest(baseUrl + season + ".json", function(err, response) {
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
