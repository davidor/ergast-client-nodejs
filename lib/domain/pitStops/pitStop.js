function PitStop(pitStopDetails) {
    this.driverId = pitStopDetails.driverId;
    this.lap = parseInt(pitStopDetails.lap);
    this.stop = parseInt(pitStopDetails.stop);
    this.time = pitStopDetails.time;
    this.duration = pitStopDetails.duration;
}

module.exports = PitStop;