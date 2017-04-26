module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname+'/dist'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        loaders: [{
            test: /\.tsx$/,
            loader: 'awesome-typescript-loader'
        }, {
            test: /\.js$/,
            loader: 'source-map-loader'    
        }]
    },
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true
    }
}