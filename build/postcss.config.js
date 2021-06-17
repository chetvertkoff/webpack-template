module.exports = async () => {
  return {
    plugins: [
      require('postcss-import'),
      require('autoprefixer'),
      require('postcss-sort-media-queries')
    ]
  }
}
