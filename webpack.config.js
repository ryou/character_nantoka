var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/webpack/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        },
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      }
    ]
  },
  // webpack-dev-serverのオプション
  // 詳細は以下
  // https://webpack.js.org/configuration/dev-server/#devserver
  devServer: {
    contentBase: path.join(__dirname, 'src/static'),

    // index.htmlのみのSPAの際に「http://hoge.com/user/status」的なURLにアクセスがあった場合
    // 当然404エラーを通常返す
    // そういう場合にindex.htmlを呼び出させる場合はtrue
    historyApiFallback: true,

    // webpackによりコンパイルされたファイルが配置されるディレクトリ
    // 「publicPath: '/assets/'」の場合「http://hoge.com/assets/bundle.js」みたいな感じで出力される
    publicPath: '/assets/'
  }
};

// 以下の記述はvue-cliで使用出来るtemplateを参考にした
// https://github.com/vuejs-templates/webpack-simple/blob/master/template/webpack.config.js
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({

    })
  ]);
}
