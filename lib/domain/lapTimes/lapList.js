var _ = require('underscore');
var Lap = require('./lap');

function LapList(lapsDetails) {
    var self = this;
    this.number = lapsDetails.number;
    this.laps = [];
    _.map(lapsDetails.Timings, function(lap) { self.laps.push(new Lap(lap)); });
}

LapList.prototype.getLap = function(driverId) {
    return _.find(this.laps, function(lap) { return lap.driverId == driverId });
};

module.exports = LapList;