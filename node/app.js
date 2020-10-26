'use strict';
var http = require("http");

var server = http.createServer().listen(3003, function(){ console.log('listen port 3003')});

var io = require("socket.io")(server);



var redis = require("redis");

var sub = redis.createClient(6379, 'localhost');

sub.subscribe("chat"); // 订阅chat频道

io.on("connection", function(socket){
    console.log('connection  come in');
    socket.emit('msgReceived', 'connection');
    sub.on("message", function(channle, msg){ // chat频道一旦接收到消息msg,则立即向socket.io连接中发送该msg数据.

        console.log("redis on message", msg);
        socket.emit("msgReceived", msg);

    })

})

process.on('uncaughtException',function(err){ console.log(err);}) //监听未捕获的异常

 process.on('unhandledRejection',function(err,promise){console.log(err);console.log(promise);}) //监听Promise没有被捕获的失败函数