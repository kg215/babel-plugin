const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    mode:"development",
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname,"./dist")
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            chunks: ["main"]
        })
    ]
};