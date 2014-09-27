function Driver(driverDetails) {
    this.driverId = driverDetails.driverId;
    this.permanentNumber = parseInt(driverDetails.permanentNumber);
    this.code = driverDetails.code;
    this.url = driverDetails.url;
    this.givenName = driverDetails.givenName;
    this.familyName = driverDetails.familyName;
    this.dateOfBirth = driverDetails.dateOfBirth;
    this.nationality = driverDetails.nationality;
}

module.exports = Driver;