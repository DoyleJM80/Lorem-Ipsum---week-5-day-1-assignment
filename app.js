const express = require('express');
var loremIpsum = require('lorem-ipsum')
  , output = loremIpsum({
    count: 3,
    units: 'paragraphs'
  });
const app = express();


app.get('/lorem', function (req, res) {
  res.send(output);
});


app.listen(3000, function () {
  console.log('listening');
});
