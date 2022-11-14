const path = require(`path`);
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: `./index.tsx`,
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, `build`),
  },
  devServer: {
    compress: false,
    port: 4000,
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
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
      ui: path.resolve(__dirname, `src/ui`),
      types: path.resolve(__dirname, `src/types`),
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
