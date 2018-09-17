const path = require("path");
const webpack = require("webpack");

const resolveApp = dir => path.join(__dirname, "..", dir);

module.exports = {
    entry: {
        main: resolveApp("src/index.js"),
    },
    output: {
        path: resolveApp("lib"),
        filename: "chinaAreaData.js",
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "babel-loader",
                },
                {
                    loader: "eslint-loader"
                }
            ],
        }]
    }
};
