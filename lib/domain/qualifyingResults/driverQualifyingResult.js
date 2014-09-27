var Driver = require('./../drivers/driver');
var Constructor = require('./../constructors/constructor');

function DriverQualifyingResult(qualifyingResultsDetails) {
    this.number = parseInt(qualifyingResultsDetails.number);
    this.position = parseInt(qualifyingResultsDetails.position);
    this.driver = new Driver(qualifyingResultsDetails.Driver);
    this.constructor = new Constructor(qualifyingResultsDetails.Constructor);
    this.q1 = qualifyingResultsDetails.Q1 || null;
    this.q2 = qualifyingResultsDetails.Q2 || null;
    this.q3 = qualifyingResultsDetails.Q3 || null;
}

module.exports = DriverQualifyingResult;