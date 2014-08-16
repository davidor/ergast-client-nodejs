var getRequest = require('./../httpRequest');

function Drivers(baseUrl) {
    this.getDriversInformation = function(year, callback) {
        getRequest(baseUrl + year + "/drivers.json", callback);
    };
}

module.exports = Drivers;