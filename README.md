# 禁止使用devtools

禁止开发人员从devtools查看页面代码

## 安装

```
npm install --save devtools-forbidden
```

## 使用

```
import  { devtoolsForbidden } from 'devtools-forbidden'
devtoolsForbidden()
```

## 参数
`devtoolsForbidden(options)` 接受一个参数

- <b>options:</b> 可选，Object 类型，用于配置相关信息，配置项如下：

|参数  | 说明 |类型|默认值|必选|
|------|-----|---|------|------|
|message  |打开控制台后提示的文字内容|string|该网站禁止使用控制台! 请关掉控制台重新刷新!|false|

