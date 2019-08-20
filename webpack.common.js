const { resolve } = require("path")
const webpack = require("webpack")
console.log(resolve(__dirname, "docs/dist"));
const common = {
  entry: "./src/index.tsx",
  output: {
    path: resolve(__dirname, "docs/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
}

module.exports = common
