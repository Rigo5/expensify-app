//qual è il nostro entry point
//dove mettiamo il bundle file ? 

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('style.css');

    console.log('env ', env);
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                { test: /\.s?css$/, use: CSSExtract.extract({
                    use: [
                        {
                            loader : 'css-loader',
                            options:{
                                sourceMap : true
                            }
                        },
                        {
                            loader : 'sass-loader',
                            options : {
                                sourceMap : true
                            }
                        }
                    ]
                }) }
            ]
        },
        plugins : [
            CSSExtract
        ],
        //ci mostra esattamente deov gli errori sono (ovvimente dalla console)
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            //questo gli dice che stiamo gestendo le routes attraverso il client e ricadano sul file index
            historyApiFallback : true,
            publicPath : '/dist/'
        }
    };
}
