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
    videoElement.controls="true";
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



const speedUpHandler = function () {
    alert("Speed Up was Clicked");
}
speedUp.addEventListener("click",speedUpHandler);