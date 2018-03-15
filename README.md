brace-cli
======

brace下的实用工具

Install
-------
* `npm install brace-cli -g`

配置文件
* .brace.json，存放在项目根目录下，配置示例如下：
```
{
  "tmpdir": "_brace", // 临时目录名，在项目根目录下创建
  "compare": { // `brace -c`相关
    "local": "php/htdocs/protected/modules/config/h5.ver.json", // 本地构建之后的版本管理文件路径
    "cdn": "svn/modules/config/h5.ver.json", // 线上版本管理文件路径
    "cdnprefix": "http://mat1.gtimg.com/auto/dptechan/static/" // CDN静态资源前缀
  }
}
```

使用
------
* `brace -c`
比较本地构建出来的静态资源与线上CDN上的资源的差异，构建之后的文件生成在项目跟目录下`/_brace/compare/`下
