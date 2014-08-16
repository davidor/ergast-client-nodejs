var getRequest = require('./../httpRequest');

function Constructors(baseUrl) {
    this.getConstructorsInformation = function(year, callback) {
        getRequest(baseUrl + year + "/constructors.json", callback);
    };
}

module.exports = Constructors;