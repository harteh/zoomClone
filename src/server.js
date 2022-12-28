import http from "http";
import {Server} from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));


// http서버와 webSocket서버 둘다 작동 가능하게 된다
const httpServer = http.createServer(app);  // http 서버
const wsServer = new Server(httpServer);

wsServer.on("connection", (socket) => {
    socket.onAny((event) => {
        console.log(`Socket Event:${event}`);
    });

    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName);
        done();
    });
});

/**  fake database
 * 서버에 연결되면 연결된 connection의 socket을 sockets[] 에 저장한다  */
//connection이 생기면 socket을 받는다
/*
const wss = new WebSocket.Server({ server });   // webSocket 서버
const sockets = [];
wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"] = "Anon";
    console.log("Connected to Browser ✔");
    socket.on("close", onSocketClose);
    socket.on("message", (msg) => {
        const message = JSON.parse(msg);
        switch (message.type) {
            case "new_message":
                sockets.forEach((aSocket) =>
                aSocket.send(`${socket.nickname}: ${message.payload}`) );
                break
                case "nickname":
                    socket["nickname"] = message.payload;
                    break
                }
            });
        }); */
        
const handleListen =() => console.log('Listening on http://localhost:3000/');
httpServer.listen(3000, handleListen);