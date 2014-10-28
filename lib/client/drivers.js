var getRequest = require('../utils/ergastHttpRequest');
var Driver = require('../domain/drivers/driver');
var DriversList = require('../domain/drivers/driversList');
var config = require('../config');

function Drivers(responsesValidator) {

    this.getDriver = function(driverId, callback) {
        var url = config.baseUrl + "drivers/" + driverId + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
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
        var url = config.baseUrl + year + "/drivers.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
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