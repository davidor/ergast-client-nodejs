var getRequest = require('./../httpRequest');

function Schedules(baseUrl) {
    this.getYearSchedule = function(year, callback) {
        getRequest(baseUrl + year + ".json", callback);
    };

    this.getRaceSchedule = function(year, race, callback) {
        getRequest(baseUrl + year + "/" + race + ".json", callback);
    };
}

module.exports = Schedules;