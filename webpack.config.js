const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    
    new HtmlWebpackPlugin({
     title: 'My App',
     filename: 'assets/admin.html',
     template:'index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
    },
    chunksSortMode: 'dependency'
    })
  ]
}
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;

  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev');
}
