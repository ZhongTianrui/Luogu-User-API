# Luogu-User-API
洛谷非官方登录 api，为网站提供通过洛谷账号登录的方法。



## 使用方法

向 `localhost:8084/api/url` 发送 `get` 请求，参数：`url`，值：云剪贴板后 $8$ 位。

返回创建云剪贴板的用户信息，json 格式

## 要求

安装 `node.js`

## 测试

可以向 `http://ztrztr.top:8084/api/url` 发送测试。
