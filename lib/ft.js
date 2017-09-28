const rp = require('request-promise');

const API = 'http://api.ft.com';

const FT = function(key) {
    this.key = key;
};

FT.prototype._request = function(method, action, data = null) {

    var options = {
        method: method,
        uri: API + action,
        headers: {
            'X-Api-Key': this.key
        },
        body: data,
        json: true
    };

    return rp(options);

};

FT.prototype.getItem = function(id) {
    return this._request('get', '/content/' + id);
};

FT.prototype.contentSearch = function(keyword) {
    return this._request('post', '/content/search/v1', {
        'queryString': keyword
    });
};

module.exports = FT;
