// Express App configuration
import app                                from "./config/express"; // Sets up configuration for express
import colors                             from "colors";
import config                             from "./config/environment";
import APIroutes                          from "./routes";

// Webpack for compiling the app
import webpack                            from "webpack";
import webpackConfig                      from "../../webpack.config";
import webpackDevMiddleware               from "webpack-dev-middleware";
import webpackHotMiddleware               from "webpack-hot-middleware";

// React
import React                              from "react";
import ReactDOMServer                     from "react-dom/server";
import { RoutingContext, match }          from "react-router";
import { Provider }                       from "react-redux";
import createLocation                     from "history/lib/createLocation";
import { fetchComponentDataBeforeRender } from "../shared/lib/fetchComponentDataBeforeRender";

import configureStore                     from "../shared/store/configureStore";
import routes                             from "../shared/routes";

app.use("/", APIroutes)

// ----------

if(process.env.NODE_ENV !== 'production'){
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}else{
  app.use('/static', express.static(__dirname + '/../../dist'));
}

app.get('/*', function (req, res) {

  const location = createLocation(req.url);

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if(err) {
      console.error(err);
      return res.status(500).render("error", {
        errorCode: 500,
        errorMessage: "Internal server error"
      });
    }

    if(!renderProps)
      return res.status(404).render("error", {
        errorCode: 404,
        errorMessage: "Not found"
      });

    const store = configureStore({});

    const InitialView = (
      <Provider store={store}>
        <RoutingContext {...renderProps} />
      </Provider>
    );

    // This method waits for all render component promises
    // to resolve before returning to browser
    fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
      .then(html => {

        const componentHTML = ReactDOMServer.renderToString(InitialView);
        const initialState = store.getState();
        res.status(200).render("index", {
          html: componentHTML,
          initialState: initialState
        });

      })
      .catch(err => {

        console.log(err);
        res.end(render("index",{}));

      });
  });
});

// ----------

// Now start the app
app.listen(config.port, () => console.log(colors.green(`\n\nServer is Up and Running at http://localhost:${config.port}\n\n`)));