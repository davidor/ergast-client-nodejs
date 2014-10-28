var rest = require('restler');

function getRequest(url, offset, limit, callback) {
    rest.get(url + "?offset=" + offset + "&limit=" + limit).on('complete', function(response) {
        if (response instanceof Error) {
            callback(response, null);
        }
        else {
            callback(null, response);
        }
    });
}

module.exports = getRequest;