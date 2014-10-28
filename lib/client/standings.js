var getRequest = require('../utils/ergastHttpRequest');
var DriversStandings = require('../domain/standings/driversStandings');
var ConstructorsStandings = require('../domain/standings/constructorsStandings');
var config = require('../config');

function Standings(responsesValidator) {

    this.getDriverStandings = function(season, callback) {
        var url = config.baseUrl + season + "/driverStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutStandingsLists(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new DriversStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]
                        ["DriverStandings"]));
            }
        });
    };

    this.getDriverStandingsAfterRound = function(season, round, callback) {
        var url = config.baseUrl + season + "/" + round + "/driverStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutStandingsLists(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new DriversStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]
                        ["DriverStandings"]));
            }
        });
    };

    this.getConstructorStandings = function(season, callback) {
        var url = config.baseUrl + season + "/constructorstandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutStandingsLists(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new ConstructorsStandings(response["MRData"]["StandingsTable"]
                        ["StandingsLists"][0]["ConstructorStandings"]));
            }
        });
    };

    this.getConstructorStandingsAfterRound = function(season, round, callback) {
        var url = config.baseUrl + season + "/" + round + "/constructorstandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutStandingsLists(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new ConstructorsStandings(response["MRData"]["StandingsTable"]
                        ["StandingsLists"][0]["ConstructorStandings"]));
            }
        });
    };

}

module.exports = Standings;
