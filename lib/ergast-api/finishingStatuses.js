var getRequest = require('./../httpRequest');

function FinishingStatuses(baseUrl) {
    this.getFinishingStatuses = function(year, callback) {
        getRequest(baseUrl + year + "/status.json", callback);
    };

    this.getFinishingStatusesInRace = function(year, race, callback) {
        getRequest(baseUrl + year + "/" + race + "/status.json", callback);
    };
}

module.exports = FinishingStatuses;