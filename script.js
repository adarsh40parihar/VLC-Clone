/**************************open button************************/

const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");
const defaultImg = document.querySelector("#default-img");

// when open button is clicked
const fileSelector = function () {
    console.log("Open button Clicked");
    videoInput.click();
}
// when file uploaded or selected then change occur
const acceptInputHandler = (obj) =>{
    console.log("File uploaded successfully");
    const selectedVideo = obj.target.files[0];
    //first remove the vlc icon
    defaultImg.style.display = "none";
    // src => base64
    const link = URL.createObjectURL(selectedVideo);
    const videoElement = document.createElement("video");
    videoElement.src = link;
    videoElement.setAttribute("class","video");
    videoPlayer.appendChild(videoElement);
    videoElement.play();
}
videoBtn.addEventListener("click",fileSelector);
videoInput.addEventListener("change",acceptInputHandler);


   /*******************volume and speed*******************/
// select the element
const speedUp = document.querySelector("#speedup")
const speedDown = document.querySelector("#speeddown")
const volumeUp = document.querySelector("#volumeup")
const volumeDown = document.querySelector("#volumedown")
const mute = document.querySelector("#mute")
const toast = document.querySelector("#toast")


const showToast = (obj) =>{
    toast.textContent = obj;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    },2000);
}

const speedUpHandler = function () {
    const videoElement = document.querySelector("video");
    if(videoElement==null){
        return;
    }
    if (videoElement.playbackRate>=3){
        return;
    }
    videoElement.playbackRate = videoElement.playbackRate + 0.5;
    
    showToast(videoElement.playbackRate + "X");

    console.log(videoElement.playbackRate);
}
const speedDownHandler = function () {
    const videoElement = document.querySelector("video");
    if(videoElement==null){
        return;
    }
    if (videoElement.playbackRate<=0.5){
        return;
    }
    videoElement.playbackRate = videoElement.playbackRate - 0.5;
   showToast(videoElement.playbackRate + "X");

    console.log(videoElement.playbackRate);
}
const volumeUpHandler = function () {
    const videoElement = document.querySelector("video");
    if(videoElement==null){
        return;
    }
    if (videoElement.volume>=0.99){
        showToast("100%");
        return;
    }
    videoElement.volume = videoElement.volume + 0.1;
    showToast(Math.round(videoElement.volume*100) + "%");
    console.log(videoElement.volume);
}
const volumeDownHandler = function () {
    const videoElement = document.querySelector("video");
    if(videoElement==null){
        return;
    }
    if (videoElement.volume <= 0.1) {
        showToast("0%");
        videoElement.volume = 0;
        return;
    }
    videoElement.volume = videoElement.volume - 0.1;
    showToast(Math.round(videoElement.volume*100) + "%");
    console.log(videoElement.volume);
}
const volumeMute = function () {
    console.log("mute");
    const videoElement = document.querySelector("video");
    if(videoElement==null){
        return;
    }
    else if (videoElement.volume<=0){
        videoElement.volume = 0.5;
        return;
    }

    videoElement.volume = 0;
    showToast(videoElement.volume*100 + "%");
    console.log(videoElement.volume);
}
speedUp.addEventListener("click",speedUpHandler);
speedDown.addEventListener("click",speedDownHandler);
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click",volumeDownHandler);
mute.addEventListener("click",volumeMute);
