# web-dev-template

1. clone this repo
2. add html template in `html` dir
3. change webpack config about HtmlWebpackPlugin's template
4. start webpack-dev-server
5. work with style in `assets/css` dir
6. save file and get result in browser

## start dev server

```bash
npm run dev
```

## html template

common config of webpack, file `webpack.common.js`

```js
new HtmlWebpackPlugin({
  template: "template/index.html", // change filename here, reserve prefix template/
  title: 'web-dev-template' // webpage title
})
```

## `static` dir

`static` map to webroot(root dir of website)
