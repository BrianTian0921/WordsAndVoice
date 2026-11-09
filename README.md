# WordsAndVoice · 见识

人物文章、演讲与访谈视频目录。

**在线站点：** https://people-lens-brian.risengoose.chatgpt.site

站点当前为私有访问，访问者需要相应权限。

## 功能

- 按人物姓名搜索文章与视频。
- 文章、视频分类目录，点击跳转原始内容。
- 按发布时间正序或倒序排列，未知日期置底。
- 限定内容平台，过滤新闻类标题。
- 支持 1080p / 4K 搜索偏好，实际画质由原平台决定。

## 构建

需要支持标准 fetch API 的现代 Node.js。

```sh
node build.mjs
```

输出为 `dist/server/index.js` 和 `dist/server/html.mjs`，部署目标为 Cloudflare Workers 兼容环境。默认导出提供 `fetch` 请求处理器。

`src/index.html` 为页面及交互；`src/worker.mjs` 为网页和搜索接口；`build.mjs` 将源文件打包为 Worker 模块。

## 限制

聚合搜索依赖 Bing RSS 返回结果，可能不可用或不完整。发布时间从来源页面提取，缺失时不推测。新闻过滤基于平台及标题规则，不能保证识别所有新闻内容。线上搜索结果和浏览器视觉验收尚未完成。

此源码包仅包含当前运行的网站实现，不包含未使用的框架模板、账户凭据或 Sites 项目标识。
