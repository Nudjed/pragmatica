const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// let multiplesFiles = articles.map(function (entryName) {
//   return new HtmlWebpackPlugin({
//     filename: entryName + '.html',
//     template: __dirname + `/articles/{entryName}.html`
//   })

module.exports = {
  // output: {
  //   publicPath: __dirname + '/'
  // },
  entry: './src/styles.css',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'network',
      template: 'src/network.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy',
      template: 'src/privacy.html',
    }),
    new HtmlWebpackPlugin({
        filename: 'terms',
        template: 'src/terms.html',
    }),
    new HtmlWebpackPlugin({
        filename: 'engine',
        template: 'src/engine.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'projects',
      template: 'src/projects.html',
  }),
    new HtmlWebpackPlugin({
      filename: 'generali-edge',
      template: 'src/generali-edge.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'welsh-government-zealous',
      template: 'src/welsh-government-zealous.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'ee-market-entry',
      template: 'src/ee-market-entry.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'mydrive-exit',
      template: 'src/mydrive-exit.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'terms',
      template: 'src/terms.html',
    }),
    new CopyWebpackPlugin([{
        from: 'src/assets',
        to: 'assets',
        toType: 'dir'
    }]),
  ],
}
