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

ergast.getYearSchedule(year, function(err, results) {});
ergast.getRaceSchedule(year, race, function(err, results) {});
ergast.getRaceResults(year, race, function(err, results) {});
ergast.getQualifyingResults(year, race, function(err, results) {});
ergast.getDriverStandings(year, function(err, results) {});
ergast.getDriverStandingsAfterRace(year, race, function(err, results) {});
ergast.getConstructorStandings(year, function(err, results) {});
ergast.getConstructorStandingsAfterRace(year, race, function(err, results) {});
ergast.getDriversInformation(year, function(err, results) {});
ergast.getConstructorsInformation(year, function(err, results) {});
ergast.getCircuitsInformation(year, function(err, results) {});
ergast.getCircuitInformation(year, race, function(err, results) {});
ergast.getFinishingStatuses(year, function(err, results) {});
ergast.getFinishingStatusesInRace(year, race, function(err, results) {});
ergast.getLapTimes(year, race, lap, function(err, results) {});
ergast.getPitStops(year, race, function(err, results) {});
```
