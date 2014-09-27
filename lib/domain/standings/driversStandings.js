var _ = require('underscore');
var DriverStanding = require('./driverStanding');

function DriversStandings(driversStandings) {
    var self = this;
    this.standings = [];
    _.map(driversStandings, function(standing) { self.standings.push(new DriverStanding(standing)); });
}

DriversStandings.prototype.getDriverStanding = function(position) {
    return _.find(this.standings, function(standing) { return standing.position == position });
};

module.exports = DriversStandings;