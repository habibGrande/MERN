const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

let users = [];
let chatHistory = [];


const server = app.listen(8000, () => {
    console.log("The server is all fired up on port 8000");
});

const io = require("socket.io")(server, { cors: true });

io.on("connection", socket => {
    console.log(socket.id + " user just connected!");
    socket.emit("Chat_History", chatHistory);
    socket.on("message", data => {
        chatHistory.push(data);
        io.emit("message_response", data);
        })

    socket.on("newUser", data => {
        users.push(data);
        socket.emit("Chat_History", chatHistory);
        io.emit("user_response", users);
        })

    socket.on("typing", data => {
        socket.broadcast.emit("type_response", data);
    })

    socket.on("disconnect", () => {
        console.log(socket.id + " user disconnected.");
        users = users.filter(user => user.socketID !== socket.id);
        
        io.emit("user_response", users);

        socket.disconnect();
    })
});