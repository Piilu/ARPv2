const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/User');

const app = express();
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use("/user", userRoute)
// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

require("./routes/turorial.routes")(app);
require("./routes/paevik.routes")(app);
require("./routes/objektid.routes")(app);
// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});