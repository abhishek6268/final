const webpack = require("webpack");
const async_hooks = eval("typeof window === 'undefined' && require('async_hooks')");
module.exports = function override(config) {
    // Update resolve fallback options
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        zlib: require.resolve("browserify-zlib"),
        querystring: require.resolve("querystring-es3"),
        path: require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        fs: false,
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        net: false,
        vm: require.resolve("vm-browserify"),
        async_hooks: false,
    
    });
    config.resolve.fallback = fallback;

    // Add resolve alias for process/browser
    config.resolve.alias = {
        ...config.resolve.alias,
        'process/browser': require.resolve('process/browser.js')
    };

    // Add ProvidePlugin for process/browser
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: require.resolve('process/browser')
        })
    ]);

    // Add rule for mjs files
    config.module.rules.push({
        test: /\.m?js$/,
        resolve: {
            fullySpecified: false
        }
    });

    return config;
}
