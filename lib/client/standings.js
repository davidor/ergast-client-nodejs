var getRequest = require('../utils/ergastHttpRequest');
var DriversStandings = require('../domain/standings/driversStandings');
var ConstructorsStandings = require('../domain/standings/constructorsStandings');

function Standings(baseUrl) {

    this.getDriverStandings = function(season, callback) {
        getRequest(baseUrl + season + "/driverStandings.json", function(response) {
            callback(new DriversStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]
                ["DriverStandings"]));
        });
    };

    this.getDriverStandingsAfterRound = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/driverStandings.json", function(response) {
            callback(new DriversStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]
                ["DriverStandings"]));
        });
    };

    this.getConstructorStandings = function(season, callback) {
        getRequest(baseUrl + season + "/constructorstandings.json", function(response) {
            callback(new ConstructorsStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]
                ["ConstructorStandings"]));
        });
    };

    this.getConstructorStandingsAfterRound = function(season, round, callback) {
        getRequest(baseUrl + season + "/" + round + "/constructorstandings.json", function(response) {
            callback(new ConstructorsStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]
                ["ConstructorStandings"]));
        });
    };

}

module.exports = Standings;
