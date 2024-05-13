let express = require('express');
let bodyParser = require('body-parser');

let server = express();
server.listen(8080, 'localhost', function () {
    console.log('Server Start Successfully');
})

/*解析json格式的请求体*/
let bodyJson = bodyParser.json();


/*http://localhost:8080/info */
server.post('/info', function (request, response) {
    response.send("Hello Erick");
});

/* 带请求体的： http://localhost:8080/queryInfo */

/*需要借助 body-parser 包: 采用路由中间件的方式引入
* 执行完毕后，会在response中修改其中的body属性*/
server.post('/queryInfo', bodyJson, function (request, response) {
    let body = request.body;
    console.log(body);  // { name: 'erick', age: 20, address: 'xian' }
    // 下面可以通过解构函数进行解构

    response.send('erick');
});