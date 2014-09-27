var _ = require('underscore');
var DriverRaceResults = require('./driverRaceResult');

function RaceResults(driverResults) {
    var self = this;
    this.driverResults = [];
    _.map(driverResults, function(driverResult) { self.driverResults.push(new DriverRaceResults(driverResult)); });
}

RaceResults.prototype.getDriverResult = function(position) {
    return _.find(this.driverResults, function(driverResult) { return driverResult.position == position });
};

module.exports = RaceResults;