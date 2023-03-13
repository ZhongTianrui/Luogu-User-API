# Luogu-User-API
洛谷非官方用户 api，为网站提供通过洛谷账号验证的方法。



## 使用方法

运行程序（命令行输入 `node index.js`）。

向 `localhost:8084/api/url` 发送 `get` 请求。参数：`url`，值：8 位字符串，说明：云剪贴板后 $8$ 位；参数：`keycode`，值：64 位字符串。说明：用户密钥，由客户端生成，需要和用户云剪贴板的内容相同；

返回创建云剪贴板的用户信息，json 格式

## 要求

安装 `node.js`

## 测试

<https://www.apifox.cn/apidoc/shared-cd94878a-d290-4921-b210-3460e589acee>

## 原理

<https://ztrztr.top/archives/259>
