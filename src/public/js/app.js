const socket = new WebSocket(`ws://${window.location.host}`);

function handleOpen(){
    console.log("Connected to Server ✔");
}
function handleClose(){
    console.log("Disconnected from Server ❌");
}

socket.addEventListener("open", handleOpen);

socket.addEventListener("message", (message) => {
    console.log("New message: ", message.data, "from the Server");
});

socket.addEventListener("close", handleClose);

//메시지 보내기까지 10초 기다리기
setTimeout(() => {
    socket.send("hello from the browser!");
}, 10000);