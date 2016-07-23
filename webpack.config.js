module.exports = {
  entry: './client/components/main.js',
  output: {
    path:'./',
    filename:'./client/bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\.js$/,  //WATCHOUT! 'dollar sign' needed here <--
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}