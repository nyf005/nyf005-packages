const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    library: "nyf_utils",
    libraryTarget: "umd",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/icons/",
            },
          },
        ],
      },
      // {
      //   test: /\.(js)$/,
      //   exclude: /node_modules/,
      //   use: "babel-loader",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "nyf utils",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
