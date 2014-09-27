function FinishingStatus(finishingStatusDetails) {
    this.statusId = finishingStatusDetails.statusId;
    this.count = parseInt(finishingStatusDetails.count);
    this.status = finishingStatusDetails.status;
}

module.exports = FinishingStatus;