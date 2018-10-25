const path = require('path');
const resolve = file => path.resolve(__dirname, file);

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
  test: /css$/,
  loader: 'css-loader'
});

const setupResolutions = () => ({
  extensions: ['.js', '.vue', '.scss', '.css', '.ts', '.tsx'],
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': resolve('../../src')
  }
});

module.exports = {
  cssLoader,
  vueLoader,
  tsLoader,
  setupResolutions
};
