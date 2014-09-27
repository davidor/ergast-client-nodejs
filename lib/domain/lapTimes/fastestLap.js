var AverageSpeed = require('./averageSpeed');
var Time = require('./time');

function FastestLap(fastestLapDetails) {
    this.rank = parseInt(fastestLapDetails.rank);
    this.lap = parseInt(fastestLapDetails.lap);
    this.time = new Time(fastestLapDetails.Time);
    this.averageSpeed = new AverageSpeed(fastestLapDetails.AverageSpeed);
}

module.exports = FastestLap;