const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src_page_one/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
