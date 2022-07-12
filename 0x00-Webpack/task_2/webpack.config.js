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
            // {
            //     test:/\.html$/,
            //     use: ['html-loader']
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    mozjpeg: {
                      progressive: true,
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: [0.65, 0.90],
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    // the webp option will enable WEBP
                    // webp: {
                    //   quality: 75
                    // }
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