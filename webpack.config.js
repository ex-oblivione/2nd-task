const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');
console.log("isDev: ", isDev)
console.log('NODE_ENV', process.env.NODE_ENV)
// Константа path встроена в node(?!).
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// MiniCssExtractPlugin нужен только для сборки producrion.



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  plugins: [
    // new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './src/pages/search-room.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'room-describe.html',
      template: './src/pages/room-describe.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: './src/pages/registration.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      template: './src/pages/sign-in.pug'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          // MiniCssExtractPlugin нужен только для сборки producrion. Для разработки использовать stlyle-loader.
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        //?
        test: /\.pug$/,
        // use: 'pug-loader',
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
        },
      },

    ],
  },
};
