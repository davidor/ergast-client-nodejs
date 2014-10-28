var getRequest = require('../utils/ergastHttpRequest');
var FinishingStatusList = require('../domain/finishingStatuses/FinishingStatusList');
var config = require('../config');

function FinishingStatuses(responsesValidator) {

    this.getFinishingStatuses = function(season, round, callback) {
        var url = config.baseUrl + season + "/" + round + "/status.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
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
        var url = config.baseUrl + season + "/status.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
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