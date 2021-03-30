module.exports = {
  plugins: [
    require("postcss-import"),
    require('autoprefixer')({
      overrideBrowserslist:  [
        "> 1%",
        "ie >= 8",
        "edge >= 15",
        "ie_mob >= 10",
        "ff >= 45",
        "chrome >= 45",
        "safari >= 7",
        "opera >= 23",
        "ios >= 3",
        "android >= 4",
        "bb >= 10"
      ]
    }),
    require('sort-css-media-queries'),
    require('cssnano')({
      preset:[
        'default',{
          discardComments:{
            removeAll:true,
          }
        }
      ]
    })
  ]
}
