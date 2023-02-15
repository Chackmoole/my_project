const path = require(`path`);
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`);
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: `./index.tsx`,
  output: {
    filename: filename('js'),
    publicPath: isDev ? '/' : './',
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
      template: path.resolve(__dirname, 'src/assets/index.html'),
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: './assets/favicon.svg',
      favicons: {
        appName: 'portfolio',
        appDescription: 'Портфолио Ильина Евгения',
        developerName: 'Ильин Евгений',
        developerURL: null,
        background: '#FF7F11',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
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
      pages: path.resolve(__dirname, `src/pages`),
      components: path.resolve(__dirname, `src/components`),
      ui: path.resolve(__dirname, `src/ui`),
      types: path.resolve(__dirname, `src/types`),
      modules: path.resolve(__dirname, `src/modules`),
    },
    extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
  },
  optimization: {
    splitChunks: { name: 'all' },
    minimize: isProd,
    minimizer: [new TerserWebpackPlugin()],
  },
  devtool: isDev ? 'eval-cheap-source-map' : false,
};
