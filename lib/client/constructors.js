var getRequest = require('../utils/ergastHttpRequest');
var Constructor = require('../domain/constructors/constructor');
var ConstructorList = require('../domain/constructors/constructorsList');

function Constructors(baseUrl, responsesValidator) {

    this.getConstructor = function(constructorId, callback) {
        getRequest(baseUrl + "constructors/" + constructorId + ".json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutConstructors(response)) {
                callback(new Error('Invalid constructor ID.'));
            }
            else {
                callback(null, new Constructor(response["MRData"]["ConstructorTable"]["Constructors"][0]));
            }
        });
    };

    this.getConstructors = function(year, callback) {
        getRequest(baseUrl + year + "/constructors.json", function(err, response) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutConstructors(response)) {
                callback(new Error('Invalid year.'));
            }
            else {
                callback(null, new ConstructorList(response["MRData"]["ConstructorTable"]["Constructors"]));
            }
        });
    };

}

module.exports = Constructors;