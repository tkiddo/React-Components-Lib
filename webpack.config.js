
/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/src/index.html"),
  filename: "./index.html"
});
module.exports = {
  entry: {
    'bundle':path.join(__dirname, "examples/src/index.js"),
    'index':path.join(__dirname, "src/index.js"),
  },
  
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },{
      test:/\.less$/,
      use:["style-loader","css-loader?modules","less-loader"]
    }]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3001
  }
};