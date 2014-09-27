var _ = require('underscore');
var DriverQualifyingResult = require('./driverQualifyingResult');

function QualifyingResults(driverQualifyingResults) {
    var self = this;
    this.driverQualifyingResults = [];
    _.map(driverQualifyingResults, function(driverResult) {
        self.driverQualifyingResults.push(new DriverQualifyingResult(driverResult));
    });
}

QualifyingResults.prototype.getDriverResult = function(position) {
    return _.find(this.driverQualifyingResults, function(driverResult) { return driverResult.position == position });
};

module.exports = QualifyingResults;
