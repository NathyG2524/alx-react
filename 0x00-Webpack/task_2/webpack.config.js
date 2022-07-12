const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
 

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                  },
                }, ]
              },
        ]
    },
    // performance: {
    //     hints: false
    //   },
    // plugins: [
    //     extractPlugin,
    //     new HtmlWebpackPlugin({
    //         template: 'src/index.html'
    //     })
    // ]
};