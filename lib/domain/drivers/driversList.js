var _ = require('underscore');
var Driver = require('./driver');

function DriversList(driversDetails) {
    var self = this;
    this.drivers = [];
    _.map(driversDetails, function(driverDetails) { self.drivers.push(new Driver(driverDetails)); });
}

DriversList.prototype.getDriver = function(code) {
    return _.find(this.drivers, function(driver) { return driver.code == code });
};

module.exports = DriversList;