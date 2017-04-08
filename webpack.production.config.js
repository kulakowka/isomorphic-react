const { resolve } = require('path')
const webpack = require('webpack')
// const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
// const WebpackChunkHash = require('webpack-chunk-hash')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  // context: resolve(__dirname, 'src'),
  entry: {
    main: './src/client.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: resolve(__dirname, 'build/static'),
    publicPath: '/static/'
  },
  devtool: 'cheap-module-source-map',
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
                  browsers: [
                    'last 2 versions',
                    'safari >= 7'
                  ]
                }
              }],
              'react'
            ]
          }
        }]
      }
    ]
  },
  // performance: {
  //   hints: 'error'
  // },
  // stats: 'errors-only',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1
      }
      // names: ['vendor', 'manifest'] // Specify the common bundle's name.
    }),
    // CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    // new webpack.optimize.CommonsChunkPlugin({
    //   filename: 'manifest.json',
    //   name: 'manifest' // But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    // }),
    new ManifestPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    // new WebpackChunkHash(),
    // new ChunkManifestPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      compressor: {
        warnings: false
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
