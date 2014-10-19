var getRequest = require('../utils/ergastHttpRequest');
var Driver = require('../domain/drivers/driver');
var DriversList = require('../domain/drivers/driversList');

function Drivers(baseUrl, responsesValidator) {

    this.getDriver = function(driverId, callback) {
        getRequest(baseUrl + "drivers/" + driverId + ".json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutDrivers(response)) {
                callback(new Error('Invalid driver ID.'));
            }
            else {
                callback(null, new Driver(response["MRData"]["DriverTable"]["Drivers"][0]));
            }
        });
    };

    this.getDrivers = function(year, callback) {
        getRequest(baseUrl + year + "/drivers.json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutDrivers(response)) {
                callback(new Error('Invalid year.'));
            }
            else {
                callback(null, new DriversList(response["MRData"]["DriverTable"]["Drivers"]));
            }
        });
    }

}

module.exports = Drivers;