var Circuit = require('./../circuits/circuit');

function Race(raceDetails) {
    this.season = parseInt(raceDetails.season);
    this.round = parseInt(raceDetails.round);
    this.url = raceDetails.url;
    this.raceName = raceDetails.raceName;
    this.circuit = new Circuit(raceDetails.Circuit);
    this.date = raceDetails.date;
    this.time = raceDetails.time;
}

module.exports = Race;
