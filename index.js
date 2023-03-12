const request = require('request');
const cheerio = require('cheerio');
// 要爬取的网站 URL
// 引入readline模块
const readline = require("readline");

// 创建readline接口实例
let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//调用接口方法
r1.question("请输入网址URL：\t", function (answer) {
    console.log("网址：", answer);
    // 不加close，则不会结束
    r1.close();
})
const url = answer;
// 发起请求
request(url, function(error, response, html) {
  if (!error && response.statusCode == 200) {
    // 将响应的 HTML 解析成 DOM
    const $ = cheerio.load(html);
    // 获取网站标题
    const title = $('title').text();
    // 获取所有链接
    $('a').each(function() {
      const link = $(this).attr('href');
      console.log(link);
    });
    // 获取所有图片链接
    $('img').each(function() {
      const imgSrc = $(this).attr('src');
      console.log(imgSrc);
    });
  }
});