//1 得到一个服务器的类
let Server = require('ws').Server;
//2.创建一个类的实例
let server = new Server({port:'8080'});
//3.监听客户端的请求,当事件发生的时候执行对应的回调函数
//socket代表跟客户端的连接对象
server.on('connection',function(socket){
   //监听客户端发过来的消息,当收到客户端消息的时候就可以执行回调函数
   socket.on('message',function(message){
     console.log(message);
     //服务器可以通过socket对象向客户端发送消息
     socket.send(`服务器回复:${message}`);
   });
});
