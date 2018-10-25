const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTML = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

const loaders = require('./loaders/index.ts');

const resolve = file => path.resolve(__dirname, file);

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : '#eval-source-map',
  entry: {
    app: resolve('../src/main.ts')
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/dist/',
    filename: isProd ? '[name].[chunkhash].js' : '[name].js'
  },
  module: {
    rules: [loaders.vueLoader(), loaders.tsLoader(), loaders.cssLoader()]
  },
  resolve: loaders.setupResolutions(),
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
    ? [
        new VueLoaderPlugin(),
        new HTML({
          template: resolve('../index.html')
        }),
        new MiniCssExtractPlugin({ filename: '[name].[chunkhash].css' }),
        new ResourceHintWebpackPlugin()
      ]
    : [
        new VueLoaderPlugin(),
        new HTML({
          template: resolve('../index.html')
        }),
        new FriendlyErrorsPlugin()
      ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          name: 'vendor',
          test(module) {
            return (
              /node_modules/.test(module.context) &&
              !/\.css$/.test(module.request)
            );
          }
        }
      }
    },
    minimizer: isProd
      ? [
          new UglifyJsPlugin({
            cache: true,
            parallel: true
          }),
          new OptimizeCSSAssetsPlugin()
        ]
      : []
  }
};
