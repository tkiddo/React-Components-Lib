
/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
 template: path.join(__dirname, "examples/src/index.html"),
 filename: "./index.html"
});
module.exports = {
 entry: path.join(__dirname, "examples/src/index.js"),
 module: {
   rules: [{
     test: /\.(js|jsx)$/,
   use: "babel-loader",
   exclude: /node_modules/
 },{
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
 },{
  test: /\.less$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          strictMath: true,
          noIeCompat: true,
        },
      },
    },
  ],
}]
},
 plugins: [htmlWebpackPlugin],
 resolve: {
   extensions: [".js", ".jsx"]
 },
 devServer: {
   port: 3001
}};