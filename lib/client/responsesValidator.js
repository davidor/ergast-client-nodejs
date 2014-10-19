function ResponsesValidator() {

    this.responseWithoutRaces = responseWithoutRaces;
    this.responseWithoutCircuits = responseWithoutCircuits;
    this.responseWithoutConstructors = responseWithoutConstructors;
    this.responseWithoutDrivers = responseWithoutDrivers;
    this.responseWithoutStatuses = responseWithoutStatuses;
    this.responseWithoutStandingsLists = responseWithoutStandingsLists;

    function responseWithoutRaces(callResponse) {
        return callResponse["MRData"]["RaceTable"]["Races"].length === 0;
    }

    function responseWithoutCircuits(callResponse) {
        return callResponse["MRData"]["CircuitTable"]["Circuits"].length === 0;
    }

    function responseWithoutConstructors(callResponse) {
        return callResponse["MRData"]["ConstructorTable"]["Constructors"].length === 0;
    }

    function responseWithoutDrivers(callResponse) {
        return callResponse["MRData"]["DriverTable"]["Drivers"].length === 0;
    }

    function responseWithoutStatuses(callResponse) {
        return callResponse["MRData"]["StatusTable"]["Status"].length === 0;
    }

    function responseWithoutStandingsLists(callResponse) {
        return callResponse["MRData"]["StandingsTable"]["StandingsLists"].length === 0;
    }

}

module.exports = ResponsesValidator;
