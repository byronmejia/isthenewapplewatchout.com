const tsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = ({ config, mode }) => {
    // Storybook ships with rules for svg by default - filter them out.
    config.module.rules = config.module.rules.filter(
        x => !x.test.test("test.svg"),
    );

    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]],
            },
        },
        {
            test: /\.svg$/,
            use: [
                { loader: require.resolve("@svgr/webpack") },
                { loader: require.resolve("file-loader") },
            ],
        },
    );
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.plugins = [
        new tsconfigPathsPlugin({
            configFile: path.resolve(__dirname, "../tsconfig.json"),
        }),
    ];
    return config;
};
