const express = require('express');
const app = express();
const port = 8010;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const passportJWT = require('./config/passport-jwt-strategy');

app.use(bodyParser.urlencoded());
app.use('/',require('./routes/api/v1'));

app.listen(port, function (err) {
  if (err) {
    console.log('Could not start the server ', err);
    return;
  }

  console.log('Server is up and running on port : ', port);
});
