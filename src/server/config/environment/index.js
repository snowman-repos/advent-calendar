import { merge }        from "lodash"
import path             from "path";

// Set environment variables - set development by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

if(process.env.NODE_ENV == "development") {
	let secrets = require("./../../../shared/secrets.js").default;
	process.env.SESSION_SECRET = secrets.SESSION_SECRET;
}

// Set all the configuration variables that might be used
// elsewhere in the app
let all = {
  env: process.env.NODE_ENV,
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },
  port: process.env.PORT || 4444,
  root: path.normalize(__dirname + "/../../.."),
  secrets: {
    session: process.env.SESSION_SECRET
  },
  session: "advent-calendar"
};

// return the configuration variables merged the the environment
// -specific variables based on the current environment
export default merge(all, require("./" + process.env.NODE_ENV + ".js" || {}));