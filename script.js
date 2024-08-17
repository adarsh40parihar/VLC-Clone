const speedUp = document.querySelector("#speedup")
const speedDown = document.querySelector("#speeddown")
const volumeUp = document.querySelector("#volumeup")
const volumeDown = document.querySelector("#volumedown")
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");


const speedUpHandler = function () {
    console.log("Speed Up was Clicked");
}
speedUp.addEventListener("click",speedUpHandler);
// when open button is clicked
const fileSelector = function () {
    console.log("Open button Clicked");
    videoInput.click();
}
videoBtn.addEventListener("click",fileSelector);

// when file uploaded or selected then change occur
const acceptInputHandler = (obj) =>{
    console.log("File uploaded successfully");
    console.log(obj.target.files);
}
videoInput.addEventListener("change",acceptInputHandler);