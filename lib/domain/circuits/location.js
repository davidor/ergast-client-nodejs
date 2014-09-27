function Location(locationDetails) {
    this.lat = parseFloat(locationDetails.lat);
    this.long = parseFloat(locationDetails.long);
    this.locality = locationDetails.locality;
    this.country = locationDetails.country;
}

module.exports = Location;