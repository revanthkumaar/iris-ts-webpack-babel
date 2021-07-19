const webpack = require('webpack');


module.exports = {
  mode: "production",
  devtool: "eval-cheap-source-map",
  plugins: [
      new webpack.DefinePlugin({
          'process.env.name': JSON.stringify('')
      })
  ]
};