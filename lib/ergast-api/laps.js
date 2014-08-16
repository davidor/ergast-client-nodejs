var getRequest = require('./../httpRequest');

function Laps(baseUrl) {
    this.getLapTimes = function(year, race, lap, callback) {
        getRequest(baseUrl + year + "/" + race + "/laps/" + lap + ".json", callback);
    };
}

module.exports = Laps;