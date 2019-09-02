## 搭建过程中遇到的一些问题、一些坑

### vue-loader v15版本问题

因为vue-loader v15版本开始需要配合一个额外的插件`VueLoaderPlugin`使用，所以当我一开始在只使用vue-loader然后执行构建时，报了如下的错误：

```shell
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
```

因此需要做如下处理：

```javascript
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	// ...
	plugins: [
		// if you got following error, you probably use vue-loader v15, so you have to use an extra plugin: VueLoaderPlugin
		// `vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.`
		new VueLoaderPlugin()
	]
}
```

### 在编译时html被替换成一段注释的问题

出现这段注释`<!--function (e,n,r,o){return sn(t,e,n,r,o,!0)}-->`
做如下处理：
```javascript
module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
```
**参考:**
 - [https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)
 - [https://stackoverflow.com/questions/49334815/vue-replaces-html-with-comment-when-compiling-with-webpack](https://stackoverflow.com/questions/49334815/vue-replaces-html-with-comment-when-compiling-with-webpack)