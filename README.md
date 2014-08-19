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

ergast.getYearSchedule(year, function(err, response) {});
ergast.getRaceSchedule(year, race, function(err, response) {});
ergast.getRaceResults(year, race, function(err, response) {});
ergast.getQualifyingResults(year, race, function(err, response) {});
ergast.getDriverStandings(year, function(err, response) {});
ergast.getDriverStandingsAfterRace(year, race, function(err, response) {});
ergast.getConstructorStandings(year, function(err, response) {});
ergast.getConstructorStandingsAfterRace(year, race, function(err, response) {});
ergast.getDriversInformation(year, function(err, response) {});
ergast.getConstructorsInformation(year, function(err, response) {});
ergast.getCircuitsInformation(year, function(err, response) {});
ergast.getCircuitInformation(year, race, function(err, response) {});
ergast.getFinishingStatuses(year, function(err, response) {});
ergast.getFinishingStatusesInRace(year, race, function(err, response) {});
ergast.getLapTimes(year, race, lap, function(err, response) {});
ergast.getPitStops(year, race, function(err, response) {});
```

For example, to print the JSON that contains the results of the 5th race of 2014:

```
ergast.getRaceResults(2014, 5, function(err, results) {
  console.log(results);
});
```
In this case, the variable `results` references the same object that can be retrieved using the Ergast API: http://ergast.com/api/f1/2014/5/results.json
