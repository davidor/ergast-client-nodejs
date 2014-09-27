var _ = require('underscore');
var Circuit = require('./circuit');

function CircuitsList(circuitsDetails) {
    var self = this;
    this.circuits = [];
    _.map(circuitsDetails, function(circuitDetails) { self.circuits.push(new Circuit(circuitDetails)); });
}

CircuitsList.prototype.getCircuit = function(id) {
    return _.find(this.circuits, function(circuit) { return circuit.circuitId == id });
};

module.exports = CircuitsList;