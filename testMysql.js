var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser'); //对post请求的请求体进行解析模块
var app = express();
app.use(bodyParser.urlencoded({ extended: false })); //bodyParser.urlencoded 用来解析request中body的 urlencoded字符，只支持utf-8的编码的字符，也支持自动的解析gzip和 zlib。返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
var hostName = '127.0.0.1'; //ip
var port = 3000; //端口


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('X-Powered-By', 'nodejs');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

var connection = mysql.createConnection({
  host: "localhost",//"shoppingdb.ce3kph6db1qt.us-east-2.rds.amazonaws.com",
  user: "root",//"admin",
  password: "CPTbtptp96",//"metcs701",
  database:"701"//'shoppinglist'
});


app.get("/getItems",(req,res)=>{
    connection.query('SELECT * FROM list',function(err,result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
});

app.listen(port, hostName, function () {

    console.log(`Server is running at http://${hostName}:${port}`);

});