const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
    name: "marketing",
    output: {
        filename: "[name].[outputhash].js",
        publicPath: "/marketing/latest/"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingApp": "./src/bootstrap"
            },
            shared: packageJson.dependencies
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);