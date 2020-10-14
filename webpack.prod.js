const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: './index.ts',
  mode: 'production',
  optimization: {
    usedExports: true,
  },
});
