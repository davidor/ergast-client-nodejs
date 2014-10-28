var getRequest = require('../utils/ergastHttpRequest');
var Constructor = require('../domain/constructors/constructor');
var ConstructorList = require('../domain/constructors/constructorsList');
var config = require('../config');

function Constructors(responsesValidator) {

    this.getConstructor = function(constructorId, callback) {
        var url = config.baseUrl + "constructors/" + constructorId + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
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
        var url = config.baseUrl + year + "/constructors.json"
        getRequest(url, 0, config.defaultResponseRows, function(err, response) {
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