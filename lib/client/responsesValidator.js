function ResponsesValidator() {

    this.responseWithoutRaces = responseWithoutRaces;
    this.responseWithoutCircuits = responseWithoutCircuits;
    this.responseWithoutConstructors = responseWithoutConstructors;
    this.responseWithoutDrivers = responseWithoutDrivers;

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

}

module.exports = ResponsesValidator;
