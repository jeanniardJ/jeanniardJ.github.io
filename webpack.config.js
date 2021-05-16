const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const {InjectManifest} = require('workbox-webpack-plugin');
const dev = process.env.NODE_ENV === "dev";

let config = {
    mode: dev ? "development" : "production",
    entry: "./src/app.js",
    watch: dev,
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "./")
    },
    devtool: dev ? "eval-cheap-module-source-map" : false,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use:
                {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }, {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    // `postcssOptions` is needed for postcss 8.x;
                    // if you use postcss 7.x skip the key
                    postcssOptions: {
                        // postcss plugins, can be exported to postcss.config.js
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]

            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: path.resolve(__dirname, "./src/images/"),
                            outputPath: './images/',
                            useRelativePaths: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        })
    ]
};

if (!dev) {
    config.plugins.push(new UglifyJsPlugin())
}

module.exports = config