const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  // context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/static/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                modules: false,
                targets: {
                  chrome: 50,
                  edge: 12,
                  ie: 10,
                  firefox: 50,
                  safari: 9,
                  ios: 10,
                  opera: 40
                  // browsers: [
                  //   'last 2 versions',
                  //   'safari >= 7'
                  // ]
                }
              }],
              'react'
            ],
            'plugins': [
              'react-hot-loader/babel'
            ]
          }
        }]
      }
    ]
  },
  // performance: {
  //   hints: 'warning'
  // },
  stats: 'errors-only',
  bail: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '*': 'http://localhost:3001'
    },
    // publicPath: '/',
    // compress: true,
    // noInfo: false,
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
  }
}
