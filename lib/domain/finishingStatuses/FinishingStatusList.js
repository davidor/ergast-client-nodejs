var _ = require('underscore');
var FinishingStatus = require('./finishingStatus');

function FinishingStatusList(finishingStatusesDetails) {
    var self = this;
    this.finishingStatuses = [];
    _.map(finishingStatusesDetails, function(status) { self.finishingStatuses.push(new FinishingStatus(status)); });
}

FinishingStatusList.prototype.getStatus = function(statusName) {
    return _.find(this.finishingStatuses, function(status) { return status.status == statusName });
};

module.exports = FinishingStatusList;