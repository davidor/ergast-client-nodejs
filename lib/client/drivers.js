var getRequest = require('../utils/ergastHttpRequest');
var Driver = require('../domain/drivers/driver');
var DriversList = require('../domain/drivers/driversList');

function Drivers(baseUrl) {

    this.getDriver = function(driverId, callback) {
        getRequest(baseUrl + "drivers/" + driverId + ".json", function(err, response) {
            err ? callback(err, null) : callback(null, new Driver(response["MRData"]["DriverTable"]["Drivers"][0]));
        });
    };

    this.getDrivers = function(year, callback) {
        getRequest(baseUrl + year + "/drivers.json", function(err, response) {
            err ? callback(err, null) : callback(null, new DriversList(response["MRData"]["DriverTable"]["Drivers"]));
        });
    }
}

module.exports = Drivers;