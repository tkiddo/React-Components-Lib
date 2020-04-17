const path = require('path');
//html-webpack-plugin用来生成一个html来包含打包生成的bundle.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            },
            exclude:/node_modules/
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    plugins:[new HtmlWebpackPlugin({
        template: path.join(__dirname, "/index.html"),
        filename: "./index.html"
    })],
    devServer:{
        port:3001
    }
}