const path = require('path');

module.exports = {
    // Tell webpack that this is development environment. Webpack will do fewer optimisations but better dev experience.
    mode: 'development',
    entry: './app/third-party-libs/play-with-lodash.ts',
    performance: {
        hints: false
    },
    output: {
        filename: 'bundle.js',

        // Specify where the output should be written.
        // It should match tsconfig/outDir property to avoid errors.
        // Webpack need absolutr path (not relative) - you need to use Node.js 'path' mddule to build it
        path: path.resolve(__dirname, 'dist'),
        // Needed for dev-server. By default, it holds bundle.js file in-memory. Code changes are not updated automatically.
        // To enable live-updates, need to write bundle.js file into the hard drive using below option
        publicPath: '/dist/'
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, './')
        },
        compress: true,
        port: 3000
    },

    // It tells webpack that there will be .map.js files and it should map it to bundled file
    devtool: 'source-map',

    // You need to tell webpack what to do with TS files
    module: {
        rules: [
            {
                // regexp - any .ts file should be compiled by ts-loader
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    // We tell webpack which file extensions it adds to the imports it finds (by default it looks for .js files only)
    resolve: {
        extensions: ['.ts', '.js']
    }
}