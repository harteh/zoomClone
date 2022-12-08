import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen =() => console.log('Listening on http://localhost:3000/');

// http서버와 webSocket서버 둘다 작동 가능하게 된다
const server = http.createServer(app);  // http 서버
const wss = new WebSocket.Server({ server });   // webSocket 서버

function onSocketClose(){
    console.log("Disconnected from the Browser ❌");
}

/* function onSocketMessage(message){
    console.log("Br: " + message.toString());
} */

//connection이 생기면 socket을 받는다
wss.on("connection", (socket) => {
    console.log("Connected to Browser ✔");
    socket.on("close", onSocketClose);
    socket.on("message", (message) => {
        socket.send(message.toString());
    });
});

server.listen(3000, handleListen);