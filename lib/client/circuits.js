var getRequest = require('../utils/ergastHttpRequest');
var Circuit = require('../domain/circuits/circuit');
var CircuitsList = require('../domain/circuits/circuitsList');
var config = require('../config');

function Circuits(responsesValidator) {

    this.getCircuit = function(season, round, callback) {
        var url = config.baseUrl + season + "/" + round + "/circuits.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
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
        var url = config.baseUrl + season + "/circuits.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
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