const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  entry: "./server/main.tsx",
  target: "node",
  node: {
    __dirname: false,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /core-js/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic",
                  },
                ],
              ],
            },
          },
        ],
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  plugins: [new NodemonPlugin()],
  resolve: {
    extentions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: [nodeExternals()],
};
