var _ = require('underscore');
var PitStop = require('./pitStop');

function PitStopList(pitStopsDetails) {
    var self = this;
    this.pitStops = [];
    _.map(pitStopsDetails, function(pitStop) { self.pitStops.push(new PitStop(pitStop)); });
}

PitStopList.prototype.getPitStop = function(driverId) {
    return _.find(this.pitStops, function(pitStop) { return pitStop.driverId == driverId });
};

module.exports = PitStopList;