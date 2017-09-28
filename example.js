var apiKey = 'e3z4kzsnz42r9dgraqfjtxjq';

var testKeyword = 'banks';
var testArticle = '8bb0966a-0a9b-11e4-ac2a-00144feabdc0';

var FT = require('./lib/ft');
var f = new FT(apiKey);

// search by keyword
f.contentSearch(testKeyword)
.then(function(data) {
    console.log(data);
})
.catch(function (err) {
    console.log(err.message);
});

// get article
f.getItem(testArticle).then(function(data) {
    console.log(data);
})
.catch(function (err) {
    console.log(err.message);
});
