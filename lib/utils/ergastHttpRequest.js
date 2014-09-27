var rest = require('restler');

var LIMIT = 200;

function getRequest(url, callback) {
    rest.get(url + "?limit=" + LIMIT).on('complete', function(response) {
        callback(response);
    });
}

module.exports = getRequest;