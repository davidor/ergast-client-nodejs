/* This spec contains a test for each one of the public functions of the Ergast wrapper. */

var _ = require('underscore');
var ErgastClient = require('./../index');

var ergast = new ErgastClient();

describe("the 2014 schedule", function() {
    it("should contain the Spanish Grand Prix, celebrated in Montmeló (Spain) on 2014-05-11", function(done) {
        ergast.getYearSchedule(2014, function(err, response) {
            var raceSchedule = _.find(response["MRData"]["RaceTable"]["Races"],
                    function(raceSchedule) { return raceSchedule["raceName"] === "Spanish Grand Prix" });
            expect(raceSchedule["Circuit"]["Location"]["locality"]).toEqual("Montmeló");
            expect(raceSchedule["Circuit"]["Location"]["country"]).toEqual("Spain");
            expect(raceSchedule["date"]).toEqual("2014-05-11");
            done();
        });
    });
});

describe("the 4th race of 2014", function() {
    it("should have a schedule with date=2014-04-20 and country=China", function(done) {
        ergast.getRaceSchedule(2014, 4, function(err, response) {
            expect(extractRaceFromResponse(response)["date"]).toEqual("2014-04-20");
            expect(extractRaceFromResponse(response)["Circuit"]["Location"]["country"]).toEqual("China");
            done();
        });
    })
});

describe("the results of the 1st race of 2014", function() {
    it("should have Rosberg in P1, and Bottas in P5", function(done) {
        ergast.getRaceResults(2014, 1, function (err, response) {
            expect(extractRaceFromResponse(response)["Results"][0]["Driver"]["familyName"]).toEqual("Rosberg");
            expect(extractRaceFromResponse(response)["Results"][4]["Driver"]["familyName"]).toEqual("Bottas");
            done();
        });
    })
});

describe("the 2nd race of 2014", function() {
    it("should have Alonso in P4, and Maldonado in P17", function(done) {
        ergast.getQualifyingResults(2014, 2, function(err, response) {
            expect(extractRaceFromResponse(response)["QualifyingResults"][3]["Driver"]["familyName"]).toEqual("Alonso");
            expect(extractRaceFromResponse(response)["QualifyingResults"][16]["Driver"]["familyName"])
                .toEqual("Maldonado");
            done();
        });
    });
});

describe("the driver standings of 2013", function() {
    it("should have Alonso in P2, and Maldonado in P18", function(done) {
        ergast.getDriverStandings(2013, function(err, response) {
            expect(extractStandingListFromResponse(response)["DriverStandings"][1]["Driver"]["familyName"])
                .toEqual("Alonso");
            expect(extractStandingListFromResponse(response)["DriverStandings"][17]["Driver"]["familyName"])
                .toEqual("Maldonado");
            done();
        });
    });
});

describe("the driver standings after the 2nd race of 2014", function() {
    it("should have Rosberg in P1, and Hamilton in P2", function(done) {
        ergast.getDriverStandingsAfterRace(2014, 2, function(err, response) {
            expect(extractStandingListFromResponse(response)["DriverStandings"][0]["Driver"]["familyName"])
                .toEqual("Rosberg");
            expect(extractStandingListFromResponse(response)["DriverStandings"][1]["Driver"]["familyName"])
                .toEqual("Hamilton");
            done();
        });
    });
});

describe("the constructor standings of 2013", function() {
    it("should have Ferrari in the third position, and Sauber in the 7th position", function(done) {
        ergast.getConstructorStandings(2013, function(err, response) {
            expect(extractStandingListFromResponse(response)["ConstructorStandings"][2]["Constructor"]["name"])
                .toEqual("Ferrari");
            expect(extractStandingListFromResponse(response)["ConstructorStandings"][6]["Constructor"]["name"])
                .toEqual("Sauber");
            done();
        });
    });
});

describe("the constructor standings of 2014 after the 2nd race", function() {
    it("should have Ferrari in the third position, and Sauber in the 8th", function(done) {
       ergast.getConstructorStandingsAfterRace(2014, 2, function(err, response) {
            expect(extractStandingListFromResponse(response)["ConstructorStandings"][2]["Constructor"]["name"])
                .toEqual("Ferrari");
            expect(extractStandingListFromResponse(response)["ConstructorStandings"][7]["Constructor"]["name"])
                .toEqual("Sauber");
            done();
       });
    });
});

describe("the drivers information of 2014", function() {
    it("should contain a driver with the number 14 called Alonso", function(done) {
       ergast.getDriversInformation(2014, function(err, response) {
           var driver = _.find(response["MRData"]["DriverTable"]["Drivers"],
                    function(driver) { return driver["permanentNumber"] === "14" } );
           expect(driver["familyName"]).toEqual("Alonso");
           done();
       });
    });
});

describe("the constructors information of 2014", function() {
    it("should contain an Italian team called Ferrari", function(done) {
        ergast.getConstructorsInformation(2014, function(err, response) {
            var constructor = _.find(response["MRData"]["ConstructorTable"]["Constructors"],
                    function(constructor) { return constructor["name"] === "Ferrari" });
            expect(constructor["nationality"]).toEqual("Italian");
            done();
        });
    });
});

describe("the circuits information of 2014", function() {
    it("should contain a circuit called Circuit de Catalunya in Spain", function(done) {
        ergast.getCircuitsInformation(2014, function(err, response) {
            var circuit = _.find(response["MRData"]["CircuitTable"]["Circuits"],
                    function(circuit) { return circuit["circuitName"] === "Circuit de Catalunya" });
            expect(circuit["Location"]["country"]).toEqual("Spain");
            done();
        });
    });
});

describe("the circuit of the 6th race of 2014", function() {
    it("should be called Circuit de Monaco and be located in Monaco", function(done) {
        ergast.getCircuitInformation(2014, 6, function(err, response) {
            expect(response["MRData"]["CircuitTable"]["Circuits"][0]["circuitName"]).toEqual("Circuit de Monaco");
            expect(response["MRData"]["CircuitTable"]["Circuits"][0]["Location"]["country"]).toEqual("Monaco");
            done();
        });
    });
});

describe("the finishing statuses of 2013", function() {
    it("should contain a status called Collision with 12 occurrences", function(done) {
        ergast.getFinishingStatuses(2013, function(err, response) {
            var status = _.find(response["MRData"]["StatusTable"]["Status"],
                    function(status) { return status["status"] === "Collision" });
            expect(status["count"]).toEqual("12");
            done();
        });
    })
});

describe("the finishing statuses of the 3rd race of 2014", function() {
    it("should contain a status called Collision with 2 occurrences", function(done) {
        ergast.getFinishingStatusesInRace(2014, 3, function(err, response) {
            var status = _.find(response["MRData"]["StatusTable"]["Status"],
                function(status) { return status["status"] === "Collision" });
            expect(status["count"]).toEqual("2");
            done();
        });
    });
});

describe("the lap times of the 4th race of 2014 (10th lap)", function() {
    it("should contain a lap time for Alonso (1:44.677)", function(done) {
        ergast.getLapTimes(2014, 4, 10, function(err, response) {
            var lap = _.find(response["MRData"]["RaceTable"]["Races"][0]["Laps"][0]["Timings"],
                    function(lap) { return lap["driverId"] === "alonso" });
            expect(lap["time"]).toEqual("1:44.677");
            done();
        });
    });
});

describe("the pit stops of the 5th race of 2014", function() {
    it("should contain the first pit stop of Alonso (21.970)", function(done) {
        ergast.getPitStops(2014, 5, function(err, response) {
            var pitStop = _.find(response["MRData"]["RaceTable"]["Races"][0]["PitStops"],
                        function(pitStop) { return pitStop["driverId"] === "alonso" && pitStop["stop"] === "1" });
            expect(pitStop["duration"]).toEqual("21.970");
            done();
        });
    });
});


/* Auxiliary functions */

function extractRaceFromResponse(response) {
    return response["MRData"]["RaceTable"]["Races"][0];
}

function extractStandingListFromResponse(response) {
    return response["MRData"]["StandingsTable"]["StandingsLists"][0];
}