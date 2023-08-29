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

```
export function devtoolsForbidden(options?: Options) {}

export type Options = {
  // 打开控制台后提示的文字内容
  message?: string;
  // 持续执行debugger的间隔(ms)，默认2000ms
  debugTime?: number;
};
```



