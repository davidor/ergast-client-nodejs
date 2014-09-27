var getRequest = require('../utils/ergastHttpRequest');
var Circuit = require('../domain/circuits/circuit');
var CircuitsList = require('../domain/circuits/circuitsList');

function Circuits(baseUrl) {

    this.getCircuit = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/circuits.json", function(response) {
            callback(new Circuit(response["MRData"]["CircuitTable"]["Circuits"][0]));
        });
    };

    this.getCircuits = function(season, callback) {
        getRequest(baseUrl + season + "/circuits.json", function(response) {
            callback(new CircuitsList(response["MRData"]["CircuitTable"]["Circuits"]));
        });
    };

}

module.exports = Circuits;