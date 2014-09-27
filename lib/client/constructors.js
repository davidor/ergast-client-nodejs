var getRequest = require('../utils/ergastHttpRequest');
var Constructor = require('../domain/constructors/constructor');
var ConstructorList = require('../domain/constructors/constructorsList');

function Constructors(baseUrl) {

    this.getConstructor = function(constructorId, callback) {
        getRequest(baseUrl + "constructors/" + constructorId + ".json", function(response) {
            callback(new Constructor(response["MRData"]["ConstructorTable"]["Constructors"][0]));
        });
    };

    this.getConstructors = function(year, callback) {
        getRequest(baseUrl + year + "/constructors.json", function(response) {
            callback(new ConstructorList(response["MRData"]["ConstructorTable"]["Constructors"]));
        });
    };

}

module.exports = Constructors;