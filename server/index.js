import APP          from "./config/express"; // Sets up configuration for express
import colors       from "colors";
import config       from "./config/environment";
import routes       from "./routes";

// Just setup routes and start the app
APP
  .use("/", routes)
  .listen(config.port, () => console.log(colors.green(`\n\nServer is Up and Running at http://localhost:${config.port}\n\n`)));