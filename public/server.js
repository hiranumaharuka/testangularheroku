const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/testheroku'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/testheroku/index.html'));
});
var distDir = __dirname + '/dist/';
app.use(express.static(distDir));
// app.get('/*', function(req, res) {
//   res.sendFile('index.html', {root: 'dist/testheroku/'}
// );
// });
app.listen(process.env.PORT || 8080);
console.log(process.env.PORT);
