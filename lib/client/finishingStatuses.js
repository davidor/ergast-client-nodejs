var getRequest = require('../utils/ergastHttpRequest');
var FinishingStatusList = require('../domain/finishingStatuses/FinishingStatusList');

function FinishingStatuses(baseUrl, responsesValidator) {

    this.getFinishingStatuses = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/status.json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutStatuses(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new FinishingStatusList(response["MRData"]["StatusTable"]["Status"]));
            }
        });
    };

    this.getYearFinishingStatuses = function(season, callback) {
        getRequest(baseUrl + season + "/status.json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutStatuses(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new FinishingStatusList(response["MRData"]["StatusTable"]["Status"]));
            }
        });
    };

}

module.exports = FinishingStatuses;