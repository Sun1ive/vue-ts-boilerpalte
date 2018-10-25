const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = file => path.resolve(__dirname, file);
const isProd = process.env.NODE_ENV === 'production';

const tsLoader = () => ({
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    transpileOnly: true,
    appendTsSuffixTo: [/\.vue$/]
  }
});

const vueLoader = () => ({
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    compilerOptions: {
      preserveWhitespace: false
    }
  }
});

const cssLoader = () => ({
  test: /\.css$/,
  use: [
    !isProd ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: { minimize: isProd }
    },
    'postcss-loader'
  ]
});

const setupResolutions = () => ({
  extensions: ['.js', '.vue', '.scss', '.css', '.ts', '.tsx'],
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': resolve('../../src')
  }
});

const svgLoader = () => ({
  test: /\.svg$/,
  loader: 'vue-svg-loader',
  options: {
    svgo: {
      plugins: [
        { removeDimensions: true },
        { removeViewBox: false },
        { removeEmptyAttrs: true },
        { removeUselessStrokeAndFill: true },
        {
          removeAttrs: {
            attrs: '*:fill:((?!^none$).)*'
          }
        }
      ],
      name: '[name].[ext]'
    }
  }
});

const fontsLoader = () => ({
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: '[name].[hash:7].[ext]'
  }
});

const mediaLoader = () => ({
  test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: '/[name].[hash:7].[ext]'
  }
});

const imagesLoader = () => ({
  test: /\.(png|jpg|gif)$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: 'img/[name].[hash:7].[ext]'
  }
});

module.exports = {
  cssLoader,
  vueLoader,
  tsLoader,
  setupResolutions,
  svgLoader,
  fontsLoader,
  mediaLoader,
  imagesLoader
};
