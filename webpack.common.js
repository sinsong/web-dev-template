const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        // JS
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // CSS
        test: /\.css$/i,
        exclude: /.*components.*/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        // SCSS
        test: /\.scss/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        // 资源
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/reource'
      },
      {
        // 字体
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      title: 'web-dev-template'
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, 'assets')
    }
  }
}