module.exports = {
  entry: './entry.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new (require('webpack-dashboard/plugin'))
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
}
