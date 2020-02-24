const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 50000;
const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connected', (socket) => {
    console.log('Connections is noice!');
    //this allows for real time conn and disconn. 
    socket.on('Disconnected from reality', ()=> {
        console.log('Adios partner!');
    })
}); 

app.use(router);


server.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); 