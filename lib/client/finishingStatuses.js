var getRequest = require('../utils/ergastHttpRequest');
var FinishingStatusList = require('../domain/finishingStatuses/FinishingStatusList');

function FinishingStatuses(baseUrl) {

    this.getFinishingStatuses = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/status.json", function(err, response) {
            err ? callback(err, null) : callback(null, new FinishingStatusList(response["MRData"]
                    ["StatusTable"]["Status"]));
        });
    };

    this.getYearFinishingStatuses = function(season, callback) {
        getRequest(baseUrl + season + "/status.json", function(err, response) {
            err ? callback(err, null) : callback(null, new FinishingStatusList(response["MRData"]
                    ["StatusTable"]["Status"]));
        });
    };

}

module.exports = FinishingStatuses;