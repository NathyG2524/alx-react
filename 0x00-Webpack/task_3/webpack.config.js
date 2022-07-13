const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
 

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    
		header: {
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
		shared: 'jquery',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},
  optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		static: path.join(__dirname, './public'),
		open: true,
		port: 8564,
	},
    performance: {
      maxAssetSize: 1000000,
    },
    mode: 'development',
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
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                  },
                  // options: {
                  //   mozjpeg: {
                  //     progressive: true,
                  //   },
                  //   // optipng.enabled: false will disable optipng
                  //   optipng: {
                  //     enabled: false,
                  //   },
                  //   pngquant: {
                  //     quality: [0.65, 0.90],
                  //     speed: 4
                  //   },
                  //   gifsicle: {
                  //     interlaced: false,
                  //   },
                  //   // the webp option will enable WEBP
                  //   // webp: {
                  //   //   quality: 75
                  //   }
                  },]
                }, ]
              },
        
    }
    // performance: {
    //     hints: false
    //   },
    // plugins: [
    //     extractPlugin,
    //     new HtmlWebpackPlugin({
    //         template: 'src/index.html'
    //     })
    // ]
  