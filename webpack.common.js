const { resolve } = require("path")
const webpack = require("webpack")

const common = {
  entry: "./src/index.tsx",
  output: {
    path: resolve(__dirname, "public/dist"),
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
