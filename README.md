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


ergast.getSeason(year, function(season) {});
ergast.getRace(season, round, function(race) {});
ergast.getRaceResults(season, round, function(raceResults) {});
ergast.getQualifyingResults(season, round, function(qualifyingResults) {});
ergast.getDriverStandings(season, function(driverStandings) {});
ergast.getDriverStandingsAfterRound(season, round, function(driverStandings) {});
ergast.getConstructorStandings(season, function(constructorStandings) {});
ergast.getConstructorStandingsAfterRound(season, round, function(constructorStandings) {});
ergast.getDriver(driverId, function(driver) {});
ergast.getDrivers(year, function(drivers) {});
ergast.getConstructor(constructorId, function(constructor) {});
ergast.getConstructors(year, function(constructors) {});
ergast.getCircuit(season, round, function(circuit) {});
ergast.getCircuits(season, function(circuits) {});
ergast.getFinishingStatuses(season, round, function(finishingStatuses) {});
ergast.getYearFinishingStatuses(season, function(finishingStatuses) {});
ergast.getLap(season, round, lapNumber, function(lap) {});
ergast.getDriverLap(season, round, lapNumber, driverId, function(lap) {});
ergast.getPitStop(season, round, pitStopNumber, function(pitStop) {});
ergast.getDriverPitStop(season, round, pitStopNumber, driverId, function(pitStop) {});

There are some examples in the file `examples.js`.

```