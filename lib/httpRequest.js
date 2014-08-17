var rest = require('restler');

var LIMIT = 200;

function getRequest(url, callback) {
    rest.get(url + "?limit=" + LIMIT).on('complete', function(response) {
        if (response instanceof Error) {
            callback(response, null);
        }
        else {
            callback(null, response);
        }
    });
}

module.exports = getRequest;