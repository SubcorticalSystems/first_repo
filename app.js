/* Empty JavaScript Page */
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public');
});

app.listen(3000, function() {
  console.log('Server is Running on Port 3000');
});