const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './client.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://localhost:3000'
    },
    port: 3001,
    contentBase: resolve(__dirname, 'public'),
    publicPath: '/',
    compress: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true
    }
  },
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
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules', 'postcss-loader' ]
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
    new webpack.NamedModulesPlugin()
  ]
}
