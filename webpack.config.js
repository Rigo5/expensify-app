//qual è il nostro entry point
//dove mettiamo il bundle file ? 

const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    //ci mostra esattamente deov gli errori sono (ovvimente dalla console)
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        //questo gli dice che stiamo gestendo le routes attraverso il client e ricadano sul file index
        historyApiFallback : true
    }
};