import http from "http";
import WebSocket from "ws";
import express from "express";
import { parse } from "path";

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

/**  fake database
 * 서버에 연결되면 연결된 connection의 socket을 
 * sockets[] 에 저장한다  */
const sockets = [];

//connection이 생기면 socket을 받는다
wss.on("connection", (socket) => {
    sockets.push(socket);
    console.log("Connected to Browser ✔");
    socket.on("close", onSocketClose);
    socket.on("message", (message) => {
        const parsed = JSON.parse(message);
        if(parsed.type === "new_message") {
            sockets.forEach(aSocket =>  aSocket.send(parsed.payload) );
        } else if (parsed.type === "nickname") {
            console.log(parsed.payload);
        }
    });
});

server.listen(3000, handleListen);