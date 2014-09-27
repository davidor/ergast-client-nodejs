var Driver = require('./../drivers/driver');
var Constructor = require('./../constructors/constructor');

function DriverStanding(driverStandingDetails) {
    this.position = parseInt(driverStandingDetails.position);
    this.points = parseInt(driverStandingDetails.points);
    this.wins = parseInt(driverStandingDetails.wins);
    this.driver = new Driver(driverStandingDetails.Driver);
    this.constructor = new Constructor(driverStandingDetails.Constructors[0]);
}

module.exports = DriverStanding;