"use strict"

const boardSquareItem = document.querySelectorAll(".board__item");
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

boardSquareItem.forEach(e => e.addEventListener("click", function () {
    if (e.classList.contains("_win")) {
        e.classList.add("_green");
        console.log('YES');
    } else {
        console.log('NO');
        e.classList.add("_red");
    }
}))
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
