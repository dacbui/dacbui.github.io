const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/appRoutes');
routes(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


var port = 3000;
app.listen(port);

console.log('API server started on: ' + port);
