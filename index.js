var getRequest = require('./lib/httpRequest');
var Schedules = require('./lib/ergast-api/schedules');
var Results = require('./lib/ergast-api/results');
var Standings = require('./lib/ergast-api/standings');
var Drivers = require('./lib/ergast-api/drivers');
var Constructors = require('./lib/ergast-api/constructors');
var Circuits = require('./lib/ergast-api/circuits');
var FinishingStatuses = require('./lib/ergast-api/finishingStatuses');
var Laps = require('./lib/ergast-api/laps');
var PitStops = require('./lib/ergast-api/pitStops');

var BASE_URL = "http://ergast.com/api/f1/";

function ErgastClient() {
    var schedules = new Schedules(BASE_URL);
    var results = new Results(BASE_URL);
    var standings = new Standings(BASE_URL);
    var drivers = new Drivers(BASE_URL);
    var constructors = new Constructors(BASE_URL);
    var circuits = new Circuits(BASE_URL);
    var finishingStatuses = new FinishingStatuses(BASE_URL);
    var laps = new Laps(BASE_URL);
    var pitStops = new PitStops(BASE_URL);

    this.getYearSchedule = function(year, callback) {
        schedules.getYearSchedule(year, callback);
    };

    this.getRaceSchedule = function(year, race, callback) {
        schedules.getRaceSchedule(year, race, callback);
    };

    this.getRaceResults = function(year, race, callback) {
        results.getRaceResults(year, race, callback);
    };

    this.getQualifyingResults = function(year, race, callback) {
        results.getQualifyingResults(year, race, callback);
    };

    this.getDriverStandings = function(year, callback) {
        standings.getDriverStandings(year, callback);
    };

    this.getDriverStandingsAfterRace = function(year, race, callback) {
        standings.getDriverStandingsAfterRace(year, race, callback);
    };

    this.getConstructorStandings = function(year, callback) {
        standings.getConstructorStandings(year, callback);
    };

    this.getConstructorStandingsAfterRace = function(year, race, callback) {
        standings.getConstructorStandingsAfterRace(year, race, callback);
    };

    this.getDriversInformation = function(year, callback) {
        drivers.getDriversInformation(year, callback);
    };

    this.getConstructorsInformation = function(year, callback) {
        constructors.getConstructorsInformation(year, callback);
    };

    this.getCircuitsInformation = function(year, callback) {
        circuits.getCircuitsInformation(year, callback);
    };

    this.getCircuitInformation = function(year, race, callback) {
        circuits.getCircuitInformation(year, race, callback);
    };

    this.getFinishingStatuses = function(year, callback) {
        finishingStatuses.getFinishingStatuses(year, callback);
    };

    this.getFinishingStatusesInRace = function(year, race, callback) {
        finishingStatuses.getFinishingStatusesInRace(year, race, callback);
    };

    this.getLapTimes = function(year, race, lap, callback) {
        laps.getLapTimes(year, race, lap, callback);
    };

    this.getPitStops = function(year, race, callback) {
        pitStops.getPitStops(year, race, callback);
    };
}

module.exports = ErgastClient;