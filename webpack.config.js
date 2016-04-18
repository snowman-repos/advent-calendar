var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var merge = require("merge");
var webpack = require("webpack");

var webpackConfig = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

if (process.env.NODE_ENV === "production") {

  webpackConfig = merge(webpackConfig,{
    devtool: "source-map",
    entry : [
      "./src/client/index.js"
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.(png|jpg|gif|jpeg|svg)$/, loader: "url-loader?limit=8192"},
      { test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader", "stylus-loader?sourceMap") },
      { test: /\.json$/, loader: "json" }
    ]},
    postcss: function() {
      return [autoprefixer];
    },
    plugins : [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new ExtractTextPlugin("main.css"),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
  });

}else{

  webpackConfig = merge(webpackConfig,{
    devtool: "inline-source-map",
    module: {
      loaders: [{
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.(png|jpg|gif|jpeg|svg)$/, loader: "url-loader?limit=8192"},
      { test: /\.styl$/, loader: "style-loader!css-loader!postcss-loader!stylus-loader" },
      { test: /\.json$/, loader: "json" }
    ]},
    postcss: function() {
      return [autoprefixer];
    },
    entry : [
      "webpack-hot-middleware/client",
      "./src/client/index.js"
    ],
    plugins : [
      new webpack.HotModuleReplacementPlugin()
    ]
  });

}

module.exports = webpackConfig;