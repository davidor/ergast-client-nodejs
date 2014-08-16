var getRequest = require('./../httpRequest');

function PitStops(baseUrl) {
    this.getPitStops = function(year, race, callback) {
        getRequest(baseUrl + year + "/" + race + "/pitstops.json", callback);
    };
}

module.exports = PitStops;