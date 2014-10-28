ergast-client-nodejs
====================

Node.js client for the [Ergast F1 API](http://ergast.com/mrd/).

You can install `ergast-client` via `npm`:

```
npm install ergast-client
```

Usage:

```
var ErgastClient = require('ergast-client');
var ergast = new ErgastClient();

ergast.getSeason(year, function(err, season) {});
ergast.getRace(season, round, function(err, race) {});
ergast.getRaceResults(season, round, function(err, raceResults) {});
ergast.getQualifyingResults(season, round, function(err, qualifyingResults) {});
ergast.getDriverStandings(season, function(err, driverStandings) {});
ergast.getDriverStandingsAfterRound(season, round, function(err, driverStandings) {});
ergast.getConstructorStandings(season, function(err, constructorStandings) {});
ergast.getConstructorStandingsAfterRound(season, round, function(err, constructorStandings) {});
ergast.getDriver(driverId, function(err, driver) {});
ergast.getDrivers(year, function(err, drivers) {});
ergast.getConstructor(constructorId, function(err, constructor) {});
ergast.getConstructors(year, function(err, constructors) {});
ergast.getCircuit(season, round, function(err, circuit) {});
ergast.getCircuits(season, function(err, circuits) {});
ergast.getFinishingStatuses(season, round, function(err, finishingStatuses) {});
ergast.getYearFinishingStatuses(season, function(err, finishingStatuses) {});
ergast.getLap(season, round, lapNumber, function(err, lap) {});
ergast.getLaps(season, round, function(err, laps) {});
ergast.getDriverLap(season, round, lapNumber, driverId, function(err, lap) {});
ergast.getPitStop(season, round, pitStopNumber, function(err, pitStop) {});
ergast.getDriverPitStop(season, round, pitStopNumber, driverId, function(err, pitStop) {});

There are some examples in the file `examples.js`.

```
