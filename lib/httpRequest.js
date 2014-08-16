var rest = require('restler');

var LIMIT = 200;

function getRequest(url, callback) {
    rest.get(url + "?limit=" + LIMIT).on('complete', function(result) {
        if (result instanceof Error) {
            callback(result, null);
        }
        else {
            callback(null, result);
        }
    });
}

module.exports = getRequest;