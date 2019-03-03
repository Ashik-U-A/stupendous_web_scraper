const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = [
  {
    mode: "development",
    entry: "./front_end/scripts/main.js",
    output: {
      path: path.join(__dirname, "front_end", "dist"),
      filename: "bundle.js"
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js" // 'vue/dist/vue.common.js' for webpack 1
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          use: {
            loader: "vue-loader",
            options: {
              css: [
                "vue-style-loader",
                {
                  loader: "css-loader",
                  options: {
                    url: false
                  }
                }
              ],
              js: ["babel-loader"],
              cur: ["file-loader", "url-loader"],
              cacheBusting: true
            }
          }
        },
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"]
        },
        {
          test: /(\.png)/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                publicPath: "dist"
              }
            }
          ]
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
];
