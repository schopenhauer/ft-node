var apiKey = 'e3z4kzsnz42r9dgraqfjtxjq';

var testKeyword = 'banks';
var testArticle = '8bb0966a-0a9b-11e4-ac2a-00144feabdc0';

var FT = require('../lib/ft');
var f = new FT(apiKey);

describe('Footsie', function () {

    it('contentSearch', function () {
        f.contentSearch(testKeyword)
        .then(function (data) {
            done();
        })
        .catch(function (err) {
            done(err);
        });
    });

    it('getItem', function () {
        f.getItem(testKeyword).then(function(data) {
            done();
        })
        .catch(function (err) {
            done(err);
        });
    });

});
