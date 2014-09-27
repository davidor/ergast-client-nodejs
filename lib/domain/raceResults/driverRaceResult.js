var Driver = require('./../drivers/driver');
var Constructor = require('./../constructors/constructor');
var Time = require('./../lapTimes/time');
var FastestLap = require('./../lapTimes/fastestLap');

function DriverRaceResults(raceResultsDetails) {
    this.number = parseInt(raceResultsDetails.number);
    this.position = parseInt(raceResultsDetails.position);
    this.points = parseInt(raceResultsDetails.points);
    this.driver = new Driver(raceResultsDetails.Driver);
    this.constructor = new Constructor(raceResultsDetails.Constructor);
    this.grid = parseInt(raceResultsDetails.grid);
    this.laps = parseInt(raceResultsDetails.laps);
    this.status = raceResultsDetails.status;
    this.time = raceResultsDetails.Time ? new Time(raceResultsDetails.Time) : this.time = null;
    this.fastestLap = raceResultsDetails.FastestLap ?
        new FastestLap(raceResultsDetails.FastestLap) : this.fastestLap = null;
}

module.exports = DriverRaceResults;