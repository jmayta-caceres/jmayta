// ------------------------------------------------- Global imports & variables

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

// ---------------------------------------------------------------------- Rules
// Style
const ruleForStyles = [
  {
    test: /\.css|\.s[ca]ss$/i,
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

// ----------------------------------------------------------------------- Main

// Rules loader
const rules = [].concat(ruleForStyles, ruleForJavaScript);

// Configuration
module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {
    devServer: {
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
      filename: isProduction ? "main.[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
      new MiniCSSExtractPlugin({
        filename: isProduction ? "style.[contenthash].css" : "style.css",
      }),
    ],
  };
};
