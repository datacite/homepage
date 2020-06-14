const path = require('path');
const loaders = require('./webpack/loaders.js');
const plugins = require('./webpack/plugins.js');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    blog: './source/javascripts/blog.js',
    country_code: './source/javascripts/country_code.js',
    members: './source/javascripts/members.js',
    homepage: './source/stylesheets/homepage.scss',
    application: './source/stylesheets/application.scss',
  },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.ESLintLoader,
      loaders.CSSLoader
    ]
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
  ],
  output: {
    filename: 'javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  }
};

// module.exports = {
//   mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//   entry: {
//     blog: './source/javascripts/blog.js',
//     country_code: './source/javascripts/country_code.js',
//     members: './source/javascripts/members.js',
//     homepage: './source/stylesheets/homepage.scss',
//     application: './source/stylesheets/application.scss',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(t|j)sx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(sa|sc|c)ss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       }
//     ]
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".ts", ".tsx"]
//   },
//   output: {
//     path: path.resolve(__dirname, '.tmp/dist'),
//     filename: 'javascripts/[name].js',
//   },
// }
