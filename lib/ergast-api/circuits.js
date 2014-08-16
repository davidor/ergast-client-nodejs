var getRequest = require('./../httpRequest');

function Circuits(baseUrl) {
    this.getCircuitsInformation = function(year, callback) {
        getRequest(baseUrl + year + "/circuits.json", callback);
    };

    this.getCircuitInformation = function(year, race, callback) {
        getRequest(baseUrl + year + "/" + race + "/circuits.json", callback);
    };
}

module.exports = Circuits;