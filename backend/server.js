const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieSession = require("cookie-session");
const app = express();
const db = require("./models");
const Role = db.roles;
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  initial();
});

app.use(helmet());

app.use(bodyParser.json());
app.use(
  cookieSession({
    name: "arp-session",
    secret: process.env.COOKIE_SECRET, // should use as secret environment variable
    httpOnly: true
  })
);
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

app.use(morgan('combined'));
require("./routes/turorial.routes")(app);
require("./routes/paevik.routes")(app);
require("./routes/objektid.routes")(app);
require("./routes/ping.routes")(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
app.listen(3001, () => {
  console.log('listening on port 3001');
});


function initial(){
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}


//HELP https://www.bezkoder.com/node-js-express-login-example/