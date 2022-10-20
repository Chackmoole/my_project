const path = require(`path`);
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const optimization = () => {
  const config = {
    splitChunks: {
      name: 'all',
    },
  };

  if (isProd) {
    config.minimize = true;
    config.minimizer = [new TerserWebpackPlugin()];
  }

  return config;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: `./index.jsx`,
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, `build`),
  },
  devServer: {
    compress: false,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, `src`),
      components: path.resolve(__dirname, `src/components`),
      common: path.resolve(__dirname, `src/common`),
    },
    extensions: [`.js`, `.jsx`],
  },
  optimization: optimization(),
  devtool: isDev ? 'eval-cheap-source-map' : false,
};
