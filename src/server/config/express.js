import colors                     from "colors";
import compression                from "compression";
import config                     from "./environment";
import cookieParser               from "cookie-parser";
import express                    from "express";
import jade                       from "jade";
import { json as parsejson }      from "body-parser";
import methodOverride             from "method-override";
import MongoStore                 from "connect-mongo";
import path                       from "path";
import mongoose                   from "mongoose"
import session                    from "express-session";

const app = express();
const STORE = MongoStore(session);

// Setup database connection
let connect = function() {
  mongoose.connect(config.mongo.uri, config.mongo.options, function(err, res) {
    if(err) {
      console.log(colors.red("\n\nCouldn't connect to DB\n\n"))
    } else {
      console.log(colors.green("\n\nDB connection open\n\n"))
    }
  });
};
connect();
mongoose.connection.on("error", console.log);
mongoose.connection.on("disconnected", connect);

// Middleware for restricting access to certain domains
let restrictHosts = function(req, res, next) {
  if(req.hostname.indexOf("localhost") !== -1)
    next();
  else res.status(403).send("Forbidden").end();
};

// Setup and run app
app
  .use(compression())
  .use(cookieParser())
  .use(methodOverride())
  .use(parsejson())
  .use(session({
    name: config.session.name,
    proxy: true,
    resave: true,
    saveUninitialized: true,
    secret: config.secrets.session,
    store: new STORE({ mongooseConnection: mongoose.connection })
  }, () => console.log(colors.green("\n\nDB connection open\n\n"))))
  .set("view engine", "jade")
  .set("views", "./src/server/views")
  .use("/parent", express.static(__dirname + "/static"))
  .use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
		next();
  })
  .use(restrictHosts)

export default app