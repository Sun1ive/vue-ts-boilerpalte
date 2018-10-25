const path = require('path');
const merge = require('webpack-merge');

const baseConf = require('./webpack.config.ts');
const resolve = file => path.resolve(__dirname, file);

module.exports = merge.smart(baseConf, {
  devServer: {
    port: 8080,
    contentBase: resolve('../dist'),
    overlay: true,
    stats: 'errors-only'
  },
  plugins: []
});
