var Drivers = require('./lib/client/drivers');
var Constructors = require('./lib/client/constructors');
var Races = require('./lib/client/races');
var Seasons = require('./lib/client/seasons');
var RaceResults = require('./lib/client/raceResults');
var QualifyingResults = require('./lib/client/qualifyingResults');
var Standings = require('./lib/client/standings');
var Circuits = require('./lib/client/circuits');
var FinishingStatuses = require('./lib/client/finishingStatuses');
var LapTimes = require('./lib/client/laptimes');
var PitStops = require('./lib/client/pitStops');

var BASE_URL = "http://ergast.com/api/f1/";

function ErgastClient() {

    var seasons = new Seasons(BASE_URL);
    var races = new Races(BASE_URL);
    var raceResults = new RaceResults(BASE_URL);
    var qualifyingResults = new QualifyingResults(BASE_URL);
    var standings = new Standings(BASE_URL);
    var drivers = new Drivers(BASE_URL);
    var constructors = new Constructors(BASE_URL);
    var circuits = new Circuits(BASE_URL);
    var finishingStatuses = new FinishingStatuses(BASE_URL);
    var lapTimes = new LapTimes(BASE_URL);
    var pitStops = new PitStops(BASE_URL);

    this.getSeason = function(year, callback) {
        seasons.getSeason(year, function(season) {
            callback(season);
        });
    };

    this.getRace = function(season, round, callback) {
        races.getRace(season, round, function(race) {
            callback(race);
        });
    };

    this.getRaceResults = function(season, round, callback) {
        raceResults.getRaceResults(season, round, function(raceResults) {
            callback(raceResults);
        });
    };

    this.getQualifyingResults = function(season, round, callback) {
        qualifyingResults.getQualifyingResults(season, round, function(qualifyingResults) {
            callback(qualifyingResults);
        })
    };

    this.getDriverStandings = function(season, callback) {
        standings.getDriverStandings(season, function(standings) {
            callback(standings);
        });
    };

    this.getDriverStandingsAfterRound = function(season, round, callback) {
        standings.getDriverStandingsAfterRound(season, round, function(standings) {
            callback(standings);
        });
    };

    this.getConstructorStandings = function(season, callback) {
        standings.getConstructorStandings(season, function(standings) {
            callback(standings);
        });
    };

    this.getConstructorStandingsAfterRound = function(season, round, callback) {
        standings.getConstructorStandingsAfterRound(season, round, function(standings) {
            callback(standings);
        });
    };

    this.getDriver = function(driverId, callback) {
        drivers.getDriver(driverId, function(driver) {
            callback(driver);
        });
    };

    this.getDrivers = function(year, callback) {
        drivers.getDrivers(year, function(drivers){
            callback(drivers);
        })
    };

    this.getConstructor = function(constructorId, callback) {
        constructors.getConstructor(constructorId, function(constructor) {
            callback(constructor);
        });
    };

    this.getConstructors = function(year, callback) {
        constructors.getConstructors(year, function(constructors) {
            callback(constructors);
        });
    };

    this.getCircuit = function(season, round, callback) {
        circuits.getCircuit(season, round, function(circuit) {
            callback(circuit);
        });
    };

    this.getCircuits = function(season, callback) {
        circuits.getCircuits(season, function(circuits) {
            callback(circuits);
        });
    };

    this.getFinishingStatuses = function(season, round, callback) {
        finishingStatuses.getFinishingStatuses(season, round, function(finishingStatuses) {
           callback(finishingStatuses);
        });
    };

    this.getYearFinishingStatuses = function(season, callback) {
        finishingStatuses.getYearFinishingStatuses(season, function(finishingStatuses) {
           callback(finishingStatuses);
        });
    };

    this.getLap = function(season, round, lapNumber, callback) {
        lapTimes.getLap(season, round, lapNumber, function(lap) {
            callback(lap);
        });
    };

    this.getDriverLap = function(season, round, lapNumber, driverId, callback) {
        lapTimes.getDriverLap(season, round, lapNumber, driverId, function(lap) {
           callback(lap);
        });
    };

    this.getPitStop = function(season, round, pitStopNumber, callback) {
        pitStops.getPitStop(season, round, pitStopNumber, function(pitStop) {
            callback(pitStop);
        });
    };

    this.getDriverPitStop = function(season, round, pitStopNumber, driverId, callback) {
        pitStops.getDriverPitStop(season, round, pitStopNumber, driverId, function(pitStop) {
            callback(pitStop);
        });
    };

}

module.exports = ErgastClient;