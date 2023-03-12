// 引入readline模块
const readline = require("readline");

// 创建readline接口实例
let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//调用接口方法
r1.question("你叫什么名字\t", function (answer) {
    console.log("我的名字是：", answer);
    // 不加close，则不会结束
    r1.close();
})

//close事件监听
r1.on("close", function () {
    // 结束程序
    process.exit(0);
})
