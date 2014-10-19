var getRequest = require('../utils/ergastHttpRequest');
var Circuit = require('../domain/circuits/circuit');
var CircuitsList = require('../domain/circuits/circuitsList');

function Circuits(baseUrl, responsesValidator) {

    this.getCircuit = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/circuits.json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutCircuits(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new Circuit(response["MRData"]["CircuitTable"]["Circuits"][0]));
            }
        });
    };

    this.getCircuits = function(season, callback) {
        getRequest(baseUrl + season + "/circuits.json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutCircuits(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new CircuitsList(response["MRData"]["CircuitTable"]["Circuits"]));
            }
        });
    };

}

module.exports = Circuits;