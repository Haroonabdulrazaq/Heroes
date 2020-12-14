const path = require('path');
const CopyPlugin =  require('copy-webpack-plugin')
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin')


module.exports ={
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },
  plugins: [ 
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
      ],
    }),
    new WriteFilePlugin(), 
  ],   
}