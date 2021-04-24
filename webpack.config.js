const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "./assets")
    },
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
                rules: [
                    {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            'css-loader'
                        ]
                    }
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
    }
};