var Location = require('./location');

function Circuit(circuitDetails) {
    this.circuitId = circuitDetails.circuitId;
    this.url = circuitDetails.url;
    this.circuitName = circuitDetails.circuitName;
    this.location = new Location(circuitDetails.Location);
}

module.exports = Circuit;
