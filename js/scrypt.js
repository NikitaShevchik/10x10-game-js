"use strict"

const boardSquareItem = document.querySelectorAll(".board__item");
const allBoard = document.querySelector(".board__grid");
const finishTitle = document.querySelector(".board__title");
const repeatGameButton = document.querySelector(".board__repeat");
const popup = document.querySelector(".popup");
const openRules = document.querySelector(".txt__morerules");
const popupCross = document.querySelector(".popup__cross");
const popupBody = document.querySelector(".popup__body");
const secondsTimer = document.querySelector(".timer__seconds");
/*--------Функция создающая 10 рандомных чисел-----*/
var randomItems = [];
function generateRandoms() {
    while (randomItems.length < 10) {
        var randomItem = Math.floor(Math.random() * 100);
        var randomRepeat = false;
        for (let i = 0; i < randomItems.length; i++) {
            if (randomItems[i] === randomItem) {
                randomRepeat = true;
                break;
            }
        }
        if (!randomRepeat) {
            randomItems[randomItems.length] = randomItem;
        }
    }
}
generateRandoms()
console.log(randomItems);
/*--------Функция закрашивающая 10 рандомных клеточек (рандомные числа из прошлой функции)-----*/
function randomSquares() {
    for (let i = 0; i < randomItems.length; i++) {
        boardSquareItem[randomItems[i]].classList.add("_win");
    }
}
randomSquares();



boardSquareItem.forEach(e => e.addEventListener("click", function (open) {
    if (e.classList.contains("_green")) {
        open.preventDefault();
    } else if (e.classList.contains("_win")) {
        e.classList.toggle("_green");
        greenCounter++;
        if (greenCounter == 10) {
            clearInterval(inter);
            allBoard.classList.add("_finish");
            finishTitle.innerHTML = "Вы победили!";
            repeatGameButton.classList.remove("_hide");
        }
    } else {
        e.classList.add("_red");
    }
}))
/*--------Перезагрузка страницы по кнопке-----*/
function restart() {
    location.reload();
};
repeatGameButton.addEventListener("click", restart);
/*--------Открытие правил-----*/
function popupRules() {
    popup.classList.toggle("_hide");
}
openRules.addEventListener("click", popupRules);
popupCross.addEventListener("click", popupRules);

popup.addEventListener("click", function (e) {
    if (e.target != popup) {
        e.preventDefault()
    } else {
        popup.classList.add("_hide");
    }
})


var greenCounter = 0;
var sec = 45;
function setTimer() {
    var inter = setInterval(tit, 1000);
    function tit() {
        if (allBoard.classList.contains("_finish")) {
            clearInterval(inter);
        }
        if (sec >= 10) {
            console.log(sec);
            secondsTimer.innerHTML = `0:${sec}`;
            sec--;
        } else if (sec < 10) {
            console.log(sec);
            secondsTimer.innerHTML = `0:0${sec}`;
            sec--;
        }
        if (sec == -1) {
            console.log("Stop")
            clearInterval(inter);
        }
    }
}
setTimer()





/*--
const seconds = document.querySelector(".timer__seconds");
var sec = 5;
clearInterval(countdown);

function countdown() {
    seconds.innerHTML = `${Number(seconds.innerHTML) - 1}`
    sec -= 1;
    console.log(sec);
    if (sec == 0) {
        clearInterval(countdown);
        console.log('sho')
    }
};







function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    if (minutes === '00' && seconds === '00'){
        console.log("NO TIME")
    }
}
window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

function randomTen(e){
    for(let i = 0; i < 10; i++){
        for (let i = Math.floor(Math.random() * 100); i < boardSquareItem.length; i++){
            randomItems.push(i);
            console.log(randomItems);
            console.log(i);
            boardSquareItem[i].classList.add("_green");
            break;
        }
    } 
}
randomTen();
var randomsTest = [];
function randomGenerateTest(){
    while(randomsTest.length < 10){
        var randomNumberTest = Math.floor(Math.random() * 100);
        var ifRepeat = false;
        for (let i = 0; i < randomsTest.length; i++){
            if (randomsTest[i] == randomNumberTest){
                ifRepeat = true;
                break;
            }
        }
        if (!ifRepeat){
            randomsTest[randomsTest.length] = randomNumberTest;
        }
    }
}
randomGenerateTest()
--*/
