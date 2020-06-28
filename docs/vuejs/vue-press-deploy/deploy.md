## 搭建与部署

### 什么是vue-press？

VuePress 由两部分组成：第一部分是一个[极简静态网站生成器](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://www.vuepress.cn/theme/)和[插件 API](https://www.vuepress.cn/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://www.vuepress.cn/theme/default-theme-config.html)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

[官方介绍](https://www.vuepress.cn/guide/)

### 快速搭建

```js
npm create vuepress
```

然后根据命令行的提示，输入相应信息即可。

### 目录结构



```text
.vuepress/config.js：vue-press的配置文件的文件入口
```

