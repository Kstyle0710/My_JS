const clockContainer = document.querySelector(".js-clock");
console.log(clockContainer)
const clockTitle = document.querySelector("h1");
console.log(clockTitle)

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours<10 ? `0${hours}` : hours}:${
        minutes<10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}


function init(){
    getTime()
}

setInterval(init, 1000)