const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let outputName = "index_bundle.js"
module.exports = env = {
    entry: "./src/index.tsx",
    output: {
        filename: outputName,
        path: __dirname + "/dist",
        // publicPath: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            modules: __dirname + '/node_modules',
            components: __dirname + '/src/components',
            src: __dirname + '/src'
        }        
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },

        
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?name=public/images/[name].[ext]"
            },
              // "file" loader makes sure assets end up in the `build` folder.
              // When you `import` an asset, you get its filename.
            {
                    test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                    use: [{
                        loader: 'file-loader'
                }],
            },
            {
                test: /\.(c|d|t)sv$/, // load all .csv, .dsv, .tsv files with dsv-loader
                use: ['dsv-loader'] // or dsv-loader?delimiter=,
            }
        ]
    }, 
    plugins: [  
        new Dotenv(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
             inject: false,
             appMountId: 'root',
             title: 'title',
             template: './public/index.html'
        })
    ],

};