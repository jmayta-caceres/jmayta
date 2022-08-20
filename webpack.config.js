// --------------------------------------------------------------------- Global imports & variables
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

// ------------------------------------------------------------------------------------------ Rules
// HTML & sources
const ruleForHTMLImages = [
  {
    test: /\.html$/i,
    loader: "html-loader",
  },
  {
    test: /\.(png|jpe?g|gif|ico)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name]-[hash][ext]",
    },
  },
];

// Style
const ruleForStyles = [
  {
    test: /\.s[ca]ss$/i,
    use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
  },
];

// JavaScript
const ruleForJavaScript = [
  {
    test: /\.m?js$/i,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
];

// ------------------------------------------------------------------------------------------- Main

// Rules loader
const rules = [].concat(ruleForStyles, ruleForHTMLImages, ruleForJavaScript);

// Configuration
module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {
    devServer: {
      liveReload: true,
      open: {
        app: {
          name: "firefox-dev-edition",
        },
      },
    },
    entry: {
      index: path.resolve(__dirname, "src", "index.js"),
    },
    module: {
      rules,
    },
    output: {
      clean: true,
      filename: isProduction ? "[name].[contenthash].js" : "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "src", "index.html"),
      }),
      new MiniCSSExtractPlugin({
        filename: isProduction ? "[name].[contenthash].css" : "[name].css",
      }),
    ],
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "src/assets/"),
        "@scripts": path.resolve(__dirname, "src/scripts/"),
        "@styles": path.resolve(__dirname, "src/styles/"),
      },
    },
  };
};
