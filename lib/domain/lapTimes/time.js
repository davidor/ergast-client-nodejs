function Time(timeDetails) {
    this.millis = parseInt(timeDetails.millis);
    this.time = timeDetails.time;
}

module.exports = Time;