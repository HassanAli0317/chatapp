var express = require('express');

var socket = require('socket.io');

var app = express();

var server = app.listen(8000, function(){
    //The callback function.
    console.log('The server run on port 8000');
});

app.use(express.static('public'));


//connect socket connection on server side.
//after refresh browser whole socket object print on cmd .
var io = socket(server);
io.on('connection', function(socket){
    // console.log(socket.id);  //provide unique id single or double page.
    socket.on("chat", function(data){

        io.sockets.emit("chat", data);

    });

    //server side.
    socket.on("typing", function(data){
        socket.broadcast.emit("typing", data);
    });

});
