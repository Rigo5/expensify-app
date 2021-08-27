//qual è il nostro entry point
//dove mettiamo il bundle file ? 

const path = require('path');
const webpack = require('webapack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const { webpack } = require('webpack');

//process.env.NODE_ENV questa variabile ci dice se siamo in produzione o development viene settata in automatico da heroku
//per il test la settiamo noi utilizzando il pacchetto cross-env

process.env.NODE_ENV = process.env.NODE_ENV || 'development'


if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

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
                {
                    test: /\.s?css$/, use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MESASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MESASUREMENT_ID),
            })
        ],
        //ci mostra esattamente deov gli errori sono (ovvimente dalla console)
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            //questo gli dice che stiamo gestendo le routes attraverso il client e ricadano sul file index
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
}
