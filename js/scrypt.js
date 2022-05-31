"use strict"

const boardSquareItem = document.querySelectorAll(".board__item");
const allBoard = document.querySelector(".board__grid");
const finishTitle = document.querySelector(".board__title");
const repeatGameButton = document.querySelector(".board__repeat");
const popup = document.querySelector(".popup");
const openRules = document.querySelector(".txt__morerules");
const popupCross = document.querySelector(".popup__cross");
const popupBody = document.querySelector(".popup__body");
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

var greenCounter = 0;

boardSquareItem.forEach(e => e.addEventListener("click", function (open) {
    if (e.classList.contains("_green")) {
        open.preventDefault();
    } else if (e.classList.contains("_win")) {
        e.classList.toggle("_green");
        greenCounter++;
        if (greenCounter == 10) {
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

/*--
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
