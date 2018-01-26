"use strict";

// console.log("Hello from external JavaScript");
//
// alert("Welcome to my website");
//
// var usersFavoriteColor = prompt("What is your favorite color?");
//
// alert("Cool " + usersFavoriteColor + " is my favorite color too");

function addition(i) {
    return i + 1;
}

function powerof(x){
    return Math.pow(x,8);
}

var userFavoriteNumber = prompt("What is your favorite number");
var userRealNumber = parseInt(userFavoriteNumber);

alert("Your favorite number is " + userFavoriteNumber);
console.log(userFavoriteNumber);
alert("You favorite number plus one is " + addition(userRealNumber));
console.log(userRealNumber);

alert("Your favorite number to the power of 8 is " + powerof(userRealNumber))




