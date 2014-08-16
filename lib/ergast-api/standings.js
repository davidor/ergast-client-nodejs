var getRequest = require('./../httpRequest');

function Standings(baseUrl) {
    this.getDriverStandings = function(year, callback) {
        getRequest(baseUrl + year + "/driverStandings.json", callback);
    };

    this.getDriverStandingsAfterRace = function(year, race, callback) {
        getRequest(baseUrl + year + "/" + race + "/driverStandings.json", callback);
    };

    this.getConstructorStandings = function(year, callback) {
        getRequest(baseUrl + year + "/constructorStandings.json", callback);
    };

    this.getConstructorStandingsAfterRace = function(year, race, callback) {
        getRequest(baseUrl + year + "/" + race + "/constructorStandings.json", callback);
    };
}

module.exports = Standings;