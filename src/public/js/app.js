const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", ()=>{
    console.log("Connected to Server ✔");
});

socket.addEventListener("message", (message) => {
    console.log("New message: ", message.data, "from the Server");
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");
});

//메시지 보내기까지 10초 기다리기
setTimeout(() => {
    socket.send("hello from the browser!");
}, 10000);