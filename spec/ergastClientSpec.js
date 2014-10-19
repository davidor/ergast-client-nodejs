var ErgastClient = require('./../index');

var ergast = new ErgastClient();

// Test for getSeason
describe("the getSeason(2014) call", function() {
    it("returns a season that contains the Spanish Grand Prix, celebrated in Montmeló (Spain)" +
        " on 2014-05-11 (5th GP)", function(done) {
        ergast.getSeason(2014, function(err, season) {
            if (!err) {
                var race = season.getRace(5);
                expect(race.raceName).toEqual("Spanish Grand Prix");
                expect(race.circuit.location.country).toEqual("Spain");
                expect(race.date).toEqual("2014-05-11");
            }
            done();
        });
    });
});

// Test for getSeason with invalid request
describe("the getSeason(1900) call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
       ergast.getSeason(1900, function(err, season) {
           expect(err).toEqual(jasmine.any(Error));
           expect(season).toBeUndefined();
           done();
       });
    });
});

// Test for getRace
describe("the getRace(2014, 4) call", function() {
    it("returns a race celebrated in China on 2014-04-20", function(done) {
        ergast.getRace(2014, 4, function(err, race) {
            if (!err) {
                expect(race.date).toEqual("2014-04-20");
                expect(race.circuit.location.country).toEqual("China");
            }
            done();
        });
    });
});

// Test for getRace with invalid request
describe("the getRace(1900, 1) call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getRace(1900, 1, function(err, race) {
            expect(err).toEqual(jasmine.any(Error));
            expect(race).toBeUndefined();
            done();
        });
    });
});

// Test for getRaceResults
describe("the getRaceResults(2014, 1) call", function() {
    it("returns results that have Rosberg in P1 (team mercedes, time=1:32:58.710, fastestLapAvgSpeed=206.436)" +
        ", and Bottas in P5 (team williams, time=+47.639, fastestLapAvgSpeed=206.128)", function(done) {
        ergast.getRaceResults(2014, 1, function (err, raceResults) {
            if (!err) {
                var p1Driver = raceResults.getDriverResult(1);
                expect(p1Driver.driver.familyName).toEqual("Rosberg");
                expect(p1Driver.time.time).toEqual("1:32:58.710");
                expect(p1Driver.fastestLap.averageSpeed.speed).toEqual(206.436);
                var p5Driver = raceResults.getDriverResult(5);
                expect(p5Driver.driver.familyName).toEqual("Bottas");
                expect(p5Driver.time.time).toEqual("+47.639");
                expect(p5Driver.fastestLap.averageSpeed.speed).toEqual(206.128);
            }
            done();
        });
    })
});

// Test for getRaceResults with invalid request
describe("the getRaceResults(1900, 1) call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getRace(1900, 1, function(err, raceResults) {
            expect(err).toEqual(jasmine.any(Error));
            expect(raceResults).toBeUndefined();
            done();
        });
    });
});

// Test for getQualifyingResults
describe("the getQualifyingResults(2014, 2) call", function() {
    it("returns results that have Alonso in P4(Q1=1:58.889, Q2=2:01.356, Q3=2:00.175), " +
        "and Maldonado in P17 (Q1=2:02.074)", function(done) {
        ergast.getQualifyingResults(2014, 2, function(err, qualifyingResults) {
            if (!err) {
                var p4Driver = qualifyingResults.getDriverResult(4);
                expect(p4Driver.driver.familyName).toEqual("Alonso");
                expect(p4Driver.q1).toEqual("1:58.889");
                expect(p4Driver.q2).toEqual("2:01.356");
                expect(p4Driver.q3).toEqual("2:00.175");
                var p17Driver = qualifyingResults.getDriverResult(17);
                expect(p17Driver.driver.familyName).toEqual("Maldonado");
                expect(p17Driver.q1).toEqual("2:02.074");
                expect(p17Driver.q2).toBeNull();
                expect(p17Driver.q3).toBeNull();
            }
            done();
        });
    });
});

// Test for getDriverStandings
describe("the getDriverStandings(2013) call", function() {
    it("returns standings that have Alonso in P2(team=Ferrari, points=242), " +
        "and Maldonado in P18(team=Williams, points=1)", function(done) {
        ergast.getDriverStandings(2013, function(err, driverStandings) {
            if (!err) {
                var p2Driver = driverStandings.getDriverStanding(2);
                expect(p2Driver.driver.familyName).toEqual("Alonso");
                expect(p2Driver.constructor.name).toEqual("Ferrari");
                expect(p2Driver.points).toEqual(242);
                var p18Driver = driverStandings.getDriverStanding(18);
                expect(p18Driver.driver.familyName).toEqual("Maldonado");
                expect(p18Driver.constructor.name).toEqual("Williams");
                expect(p18Driver.points).toEqual(1);
            }
            done();
        });
    });
});

// Test for getDriverStandingsAfterRound
describe("the getDriverStandingsAfterRound(2014, 2) call", function() {
    it("returns standings that have Rosberg in P1, and Hamilton in P2", function(done) {
        ergast.getDriverStandingsAfterRound(2014, 2, function(err, standings) {
            if (!err) {
                var p1Driver = standings.getDriverStanding(1);
                expect(p1Driver.driver.familyName).toEqual("Rosberg");
                var p2Driver = standings.getDriverStanding(2);
                expect(p2Driver.driver.familyName).toEqual("Hamilton");
            }
            done();
        });
    });
});

// Test for getConstructorStandings
describe("the getConstructorStandings(2013) call", function() {
    it("returns standings that have Ferrari in the third position (354 points), " +
        "and Sauber in the 7th position (57 points)", function(done) {
        ergast.getConstructorStandings(2013, function(err, constructorStandings) {
            if (!err) {
                var p3Constructor = constructorStandings.getConstructorStanding(3);
                expect(p3Constructor.constructor.name).toEqual("Ferrari");
                expect(p3Constructor.points).toEqual(354);
                var p7Constructor = constructorStandings.getConstructorStanding(7);
                expect(p7Constructor.constructor.name).toEqual("Sauber");
                expect(p7Constructor.points).toEqual(57);
            }
            done();
        })
    });
});

// Test for getConstructorStandingsAfterRound
describe("the getConstructorStandingsAfterRound(2014, 2) call", function() {
    it("returns standings that have Ferrari in the third position, and Sauber in the 8th", function(done) {
        ergast.getConstructorStandingsAfterRound(2014, 2, function(err, standings) {
            if (!err) {
                var p3Constructor = standings.getConstructorStanding(3);
                expect(p3Constructor.constructor.name).toEqual("Ferrari");
                var p8Constructor = standings.getConstructorStanding(8);
                expect(p8Constructor.constructor.name).toEqual("Sauber");
            }
            done();
        });
    });
});

// Test for getDriver
describe("the getDriver('alonso') call", function() {
    it("returns a Spanish driver with code ALO", function(done) {
        ergast.getDriver("alonso", function(err, driver) {
            if (!err) {
                expect(driver.nationality).toEqual("Spanish");
                expect(driver.code).toEqual("ALO");
            }
            done();
        });
    });
});

// Test for getDriver with invalid request
describe("the getDriver('alonsoo') call", function() {
    it("returns an error because there is not a driver with id=alonsoo", function(done) {
        ergast.getDriver("alonsoo", function(err, driver) {
            expect(err).toEqual(jasmine.any(Error));
            expect(driver).toBeUndefined();
            done();
        });
    });
});

// Test for getDrivers
describe("the getDrivers(2014) call", function() {
    it("returns a list of drivers that contains a Spanish driver called Fernando Alonso with code ALO, " +
        "and a French driver called Romain Grosjean with code GRO", function(done) {
        ergast.getDrivers(2014, function(err, drivers) {
            if (!err) {
                var alonso = drivers.getDriver("ALO");
                expect(alonso.givenName).toEqual("Fernando");
                expect(alonso.familyName).toEqual("Alonso");
                expect(alonso.nationality).toEqual("Spanish");
                var grosjean = drivers.getDriver("GRO");
                expect(grosjean.givenName).toEqual("Romain");
                expect(grosjean.familyName).toEqual("Grosjean");
                expect(grosjean.nationality).toEqual("French");
            }
            done();
        });
    });
});

// Test for getDrivers with invalid request
describe("the getDrivers(1900) call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getDrivers(1900, function(err, drivers) {
            expect(err).toEqual(jasmine.any(Error));
            expect(drivers).toBeUndefined();
            done();
        });
    });
});

// Test for getConstructor
describe("the getConstructor('ferrari') call", function() {
    it ("returns an Italian constructor called Ferrari", function(done) {
        ergast.getConstructor("ferrari", function(err, constructor) {
            if (!err) {
                expect(constructor.name).toEqual("Ferrari");
                expect(constructor.nationality).toEqual("Italian");
            }
            done();
        });
    });
});

// Test for getConstructor with invalid request
describe("the getConstructor('ferrariii') call", function() {
    it("returns an error because the constructor ferrariii does not exist", function(done) {
        ergast.getConstructor("ferrariii", function(err, constructor) {
            expect(err).toEqual(jasmine.any(Error));
            expect(constructor).toBeUndefined();
            done();
        });
    });
});

// Test for getConstructors
describe("the getConstructors(2014) call", function() {
    it ("returns a list that contains a British team called McLaren with id=mclaren", function(done){
        ergast.getConstructors(2014, function(err, constructors) {
            if (!err) {
                var mclaren = constructors.getConstructor("mclaren");
                expect(mclaren.name).toEqual("McLaren");
                expect(mclaren.nationality).toEqual("British");
            }
            done();
        });
    });
});

// Test for getConstructor with invalid request
describe("the getConstructors('1900') call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getConstructors(1900, function(err, constructors) {
            expect(err).toEqual(jasmine.any(Error));
            expect(constructors).toBeUndefined();
            done();
        });
    });
});

// Test for getCircuit
describe("the getCircuit(2014, 6) call", function() {
    it("returns a circuit called Circuit de Monaco and is located in Monaco", function(done) {
        ergast.getCircuit(2014, 6, function(err, circuit) {
            if (!err) {
                expect(circuit.circuitName).toEqual("Circuit de Monaco");
                expect(circuit.location.country).toEqual("Monaco");
            }
            done();
        });
    });
});

// Test for getCircuit with invalid request
describe("the getCircuit(1900, 1) call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getCircuit(1900, 1, function(err, circuit) {
            expect(err).toEqual(jasmine.any(Error));
            expect(circuit).toBeUndefined();
            done();
        });
    });
});

// Test for getCircuits
describe("the getCircuits(2014) call", function() {
    it("returns a list of circuits that contains one with id=catalunya called Circuit de Catalunya" +
            " in Spain", function(done) {
        ergast.getCircuits(2014, function(err, circuits) {
            if (!err) {
                var catalunya = circuits.getCircuit("catalunya");
                expect(catalunya.circuitName).toEqual("Circuit de Catalunya");
                expect(catalunya.location.country).toEqual("Spain");
            }
            done();
        });
    });
});

// Test for getCircuits with invalid request
describe("the getCircuits(1900) call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getCircuits(1900, function(err, circuit) {
            expect(err).toEqual(jasmine.any(Error));
            expect(circuit).toBeUndefined();
            done();
        });
    });
});

// Test for getFinishingStatuses
describe("the getFinishingStatuses(2014, 1) call", function() {
    it("returns a list that includes a status called Finished (10 times), and Collision (2 times)", function(done) {
        ergast.getFinishingStatuses(2014, 1, function(err, statuses) {
            if (!err) {
                expect(statuses.getStatus('Finished').count).toEqual(10);
                expect(statuses.getStatus('Collision').count).toEqual(2);
            }
            done();
        });
    });
});

// Test for getFinishingStatuses with invalid request
describe("the getFinishingStatuses(1900, 1) call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getFinishingStatuses(1900, 1, function(err, statuses) {
            expect(err).toEqual(jasmine.any(Error));
            expect(statuses).toBeUndefined();
            done();
        });
    });
});

// Test for getYearFinishingStatuses
describe("the getYearFinishingStatuses(2013) call", function() {
    it("returns a list that includes a status called Finished (244 times), and Collision (12 times)", function(done) {
        ergast.getYearFinishingStatuses(2013, function(err, statuses) {
            if (!err) {
                expect(statuses.getStatus('Finished').count).toEqual(244);
                expect(statuses.getStatus('Collision').count).toEqual(12);
            }
            done();
        });
    });
});

// Test for getYearFinishingStatuses with invalid request
describe("the getYearFinishingStatuses(1900) call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getYearFinishingStatuses(1900, function(err, statuses) {
            expect(err).toEqual(jasmine.any(Error));
            expect(statuses).toBeUndefined();
            done();
        });
    });
});

// Test for getLap
describe("the getLap(2014, 5, 1) call", function() {
    it("returns a lap of 1:36.072 for Hamilton and of 1:48.117 for Maldonado", function(done) {
        ergast.getLap(2014, 5, 1, function(err, lap) {
            if (!err) {
                expect(lap.getLap('hamilton').time).toEqual('1:36.072');
                expect(lap.getLap('maldonado').time).toEqual('1:48.117');
            }
            done();
        });
    });
});

// Test for getLap with invalid request
describe("the getLap(1900, 1, 1) call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getLap(1900, 1, 1, function(err, lap) {
            expect(err).toEqual(jasmine.any(Error));
            expect(lap).toBeUndefined();
            done();
        });
    });
});

// Test for getDriverLap
describe("the getDriverLap(2014, 6, 2, 'alonso') call", function() {
    it("returns a lap of 1:34.273", function(done) {
        ergast.getDriverLap(2014, 6, 2, 'alonso', function(err, lap) {
            if (!err) {
                expect(lap.time).toEqual('2:03.569');
            }
            done();
        });
    });
});

// Test for getDriverLap with invalid request
describe("the getDriverLap(1900, 1, 1, 'alonso') call", function() {
    it("returns an error because Formula 1 did not exist", function(done) {
        ergast.getDriverLap(1900, 1, 1, 'alonso', function(err, lap) {
            expect(err).toEqual(jasmine.any(Error));
            expect(lap).toBeUndefined();
            done();
        });
    });
});

// Test for getPitStop
describe("the getPitStop(2014, 4, 1) call", function() {
   it("returns a pit stop with a duration of 22.994s done in the 10th lap", function(done) {
        ergast.getPitStop(2014, 4, 1, function(err, pitStops){
            if (!err) {
                expect(pitStops.getPitStop('raikkonen').duration).toEqual('22.994');
                expect(pitStops.getPitStop('raikkonen').lap).toEqual(10);
            }
            done();
        });
   });
});

// Test for getDriverPitStop
describe("the getDriverPitStop(2014, 1, 1, 'alonso') call", function() {
   it("returns a pit stop with a duration of 22.887s done in the 12th lap", function(done) {
       ergast.getDriverPitStop(2014, 1, 1, 'alonso', function(err, pitStop) {
           if (!err) {
               expect(pitStop.duration).toEqual('22.887');
               expect(pitStop.lap).toEqual(12);
           }
           done();
       });
   });
});