const socket = io();

const myFace = document.getElementById("myFace");   

let myStream;

async function getMedia(){
    try {
        myStream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true,
        });
        myFace.srcObject = myStream;
    } catch (e) {
        console.log(e);
    }
}

getMedia();