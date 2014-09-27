function Lap(lapDetails) {
    this.driverId = lapDetails.driverId;
    this.position = parseInt(lapDetails.position);
    this.time = lapDetails.time;
}

module.exports = Lap;
