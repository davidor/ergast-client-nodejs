var Drivers = require('./lib/client/drivers');
var Constructors = require('./lib/client/constructors');
var Races = require('./lib/client/races');
var Seasons = require('./lib/client/seasons');
var RaceResults = require('./lib/client/raceResults');
var QualifyingResults = require('./lib/client/qualifyingResults');
var Standings = require('./lib/client/standings');
var Circuits = require('./lib/client/circuits');
var FinishingStatuses = require('./lib/client/finishingStatuses');
var LapTimes = require('./lib/client/lapTimes');
var PitStops = require('./lib/client/pitStops');

var BASE_URL = "http://ergast.com/api/f1/";
var ResponsesValidator = require('./lib/client/responsesValidator');

function ErgastClient() {

    var responsesValidator = new ResponsesValidator();
    var seasons = new Seasons(BASE_URL, responsesValidator);
    var races = new Races(BASE_URL, responsesValidator);
    var raceResults = new RaceResults(BASE_URL, responsesValidator);
    var qualifyingResults = new QualifyingResults(BASE_URL, responsesValidator);
    var standings = new Standings(BASE_URL, responsesValidator);
    var drivers = new Drivers(BASE_URL, responsesValidator);
    var constructors = new Constructors(BASE_URL, responsesValidator);
    var circuits = new Circuits(BASE_URL, responsesValidator);
    var finishingStatuses = new FinishingStatuses(BASE_URL, responsesValidator);
    var lapTimes = new LapTimes(BASE_URL, responsesValidator);
    var pitStops = new PitStops(BASE_URL, responsesValidator);

    this.getSeason = function(year, callback) {
        seasons.getSeason(year, function(err, season) {
            callback(err, season);
        });
    };

    this.getRace = function(season, round, callback) {
        races.getRace(season, round, function(err, race) {
            callback(err, race);
        });
    };

    this.getRaceResults = function(season, round, callback) {
        raceResults.getRaceResults(season, round, function(err, raceResults) {
            callback(err, raceResults);
        });
    };

    this.getQualifyingResults = function(season, round, callback) {
        qualifyingResults.getQualifyingResults(season, round, function(err, qualifyingResults) {
            callback(err, qualifyingResults);
        })
    };

    this.getDriverStandings = function(season, callback) {
        standings.getDriverStandings(season, function(err, standings) {
            callback(err, standings);
        });
    };

    this.getDriverStandingsAfterRound = function(season, round, callback) {
        standings.getDriverStandingsAfterRound(season, round, function(err, standings) {
            callback(err, standings);
        });
    };

    this.getConstructorStandings = function(season, callback) {
        standings.getConstructorStandings(season, function(err, standings) {
            callback(err, standings);
        });
    };

    this.getConstructorStandingsAfterRound = function(season, round, callback) {
        standings.getConstructorStandingsAfterRound(season, round, function(err, standings) {
            callback(err, standings);
        });
    };

    this.getDriver = function(driverId, callback) {
        drivers.getDriver(driverId, function(err, driver) {
            callback(err, driver);
        });
    };

    this.getDrivers = function(year, callback) {
        drivers.getDrivers(year, function(err, drivers){
            callback(err, drivers);
        })
    };

    this.getConstructor = function(constructorId, callback) {
        constructors.getConstructor(constructorId, function(err, constructor) {
            callback(err, constructor);
        });
    };

    this.getConstructors = function(year, callback) {
        constructors.getConstructors(year, function(err, constructors) {
            callback(err, constructors);
        });
    };

    this.getCircuit = function(season, round, callback) {
        circuits.getCircuit(season, round, function(err, circuit) {
            callback(err, circuit);
        });
    };

    this.getCircuits = function(season, callback) {
        circuits.getCircuits(season, function(err, circuits) {
            callback(err, circuits);
        });
    };

    this.getFinishingStatuses = function(season, round, callback) {
        finishingStatuses.getFinishingStatuses(season, round, function(err, finishingStatuses) {
           callback(err, finishingStatuses);
        });
    };

    this.getYearFinishingStatuses = function(season, callback) {
        finishingStatuses.getYearFinishingStatuses(season, function(err, finishingStatuses) {
           callback(err, finishingStatuses);
        });
    };

    this.getLap = function(season, round, lapNumber, callback) {
        lapTimes.getLap(season, round, lapNumber, function(err, lap) {
            callback(err, lap);
        });
    };

    this.getDriverLap = function(season, round, lapNumber, driverId, callback) {
        lapTimes.getDriverLap(season, round, lapNumber, driverId, function(err, lap) {
           callback(err, lap);
        });
    };

    this.getPitStop = function(season, round, pitStopNumber, callback) {
        pitStops.getPitStop(season, round, pitStopNumber, function(err, pitStop) {
            callback(err, pitStop);
        });
    };

    this.getDriverPitStop = function(season, round, pitStopNumber, driverId, callback) {
        pitStops.getDriverPitStop(season, round, pitStopNumber, driverId, function(err, pitStop) {
            callback(err, pitStop);
        });
    };

}

module.exports = ErgastClient;