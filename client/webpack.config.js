module.exports = {
  entry: "./index.js",
  output: {
      filename: "./bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/], // specifies file types to transpile
        exclude: /(node_modules)/, // leaves dependencies alone
        loader: 'babel', // sets Babel as the transpiler
        query: {
          presets: ['es2015', 'react'] // tells Babel what syntaxes to translate
        }
      }
    ]
  },
  resolve: {
    extensions: ['','.js', '.jsx']
	}
}