const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry : './app/index.js',
    output :{
        path : path.resolve(_dirname, 'MyData'),
        fileName:'index-bundle.js'
    },
    module:{
        rules : [
            //babel - babel loader
            {test : /\.(js)$/, use : 'babel-loader'},
            //style-loader
            {test:/\.(css)$/,use :['style-loader','css-loader']}
        ]
    },
    mode : 'development',
    plugin : [
        new HtmlWebpackPlugin({
            template:'app/index.html'
        })
    ]
}