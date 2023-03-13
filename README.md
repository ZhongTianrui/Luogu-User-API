# [Luogu-User-API](https://github.com/ZhongTianrui/Luogu-User-API)

洛谷非官方用户 api，为网站提供通过洛谷账号验证的方法。



## 使用方法
### 客户
在洛谷创建一个云剪贴板，内容位前端生成的 $64$ 位随机密钥，输入云剪贴板链接后 $8$ 位到前端网站。
### 网站

运行程序（命令行输入 `node index.js`）。

向 `localhost:8084/api/url` 发送 `get` 请求。参数：`url`，值：8 位字符串，说明：云剪贴板后 $8$ 位；参数：`keycode`，值：64 位字符串。说明：用户密钥，由前端生成，需要和用户云剪贴板的内容相同；

返回创建云剪贴板的用户信息，json 格式

## 要求

安装 `node.js`

## 测试

可以向 `http://ztrztr.top:8084/api/url` 发送测试。
