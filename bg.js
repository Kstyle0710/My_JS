const body = document.querySelector("body")
const IMG_NUMBER = 5;


function paintImage(imgNumber){
    const image =  new Image();
    image.src = `picture/${imgNumber+1}.jpg`;
    image.classList.add("bgimage");   // CSS와 연결
    body.prepend(image);

}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {

    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();