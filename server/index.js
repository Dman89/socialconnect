const express = require('express');
const http = require('http');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const app = express();
const UserRouter = require('./routes/router_user');
const ListingRouter = require('./routes/router_list');
const componentRouter = require('./routes/router_component');
const db = require('./database');
const cors = require('cors');
app.use(morgan('combined'));
app.use(cors()); // Allows CORS(Cross Origin GET Request)
app.use(bodyParser.json({type: '*/*'}));
componentRouter(app);
UserRouter(app);
ListingRouter(app);





const port = process.env.PORT || 3000;
// const server = http.createServer(app);
app.listen(port, function() {
  console.log('Server Listening on localhost:' + port);
});

module.exports = app;
