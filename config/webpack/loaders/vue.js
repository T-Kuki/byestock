module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader',
    options: {
      cssModules: {
        localIdentName: '[path][name]---[local]---[hash:base64:5]',
        camelCase: true
      }
    }
  }]
}
