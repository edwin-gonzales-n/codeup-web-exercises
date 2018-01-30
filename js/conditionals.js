"use strict";

run_program();

function run_program (){
    var user_confirmation = confirm("Hello, would you like to enter a number?");
    if (user_confirmation == true) {
        var user_number = prompt("Please enter a number, any number");

        isEven(user_number);
        addition((user_number));
        negative_positive(user_number);
    }

    function addition(n){
        var added = parseFloat(n) + 100;
        return alert("Your number added plus a 100 is " + added);
    }

    function negative_positive(x){
        if (Math.sign(x) == 1)
            return alert("Your number is positive");
        else
            return alert("Your number is negative");
    }

    function isEven(value) {
        if (value%2 == 0)
            return alert("Your number is even");
        else
            return alert("Your number is odd");
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

var colorName = prompt("Please enter a color name");

analyzeColor(colorName);
console.log(randomColor);

function analyzeColor(n) {

    // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    // var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
//         for (var i = 0; i < 7; i++) {
//
//             // if (n == colors[0]) {
//             //     return console.log("Roses are beautiful, so is the color " + colors[0] + " !");
//             //     break;
//             // }
//             // else if (n == colors[1]){
//             //     return console.log("Oranges are yummy, and they are color " + colors[1] + " !");
//             //     break;
//             // }
//             // else if (n == colors[2]){
//             //     return console.log("The shine sun is " + colors[2] + " !");
//             //     break;
//             // }
//             // else if (n == colors[3]){
//             //     return console.log("The grass is " + colors[3] + " !");
//             //     break;
//             // }
//             // else if (n == colors[4]){
//             //     return console.log("The sky is beautiful, and it is color " + colors[4] + " !");
//             //     break;
//             // }
//             // else if (n == colors[5]){
//             //     return console.log("I have no clue about the color " + colors[5] + " !");
//             //     break;
//             // }
//             // else if (n == colors[6]){
//             //     return console.log("My daughter's favorite color is the color " + colors[6] + " !");
//             //     break;
//             // }
//             // else {
//             //     return console.log(colorName + " is a color not in my list");
//             //     break;
//             // }
//
//             // for (var i = 0; i < 7; i++) {
//             //
//             //     switch (n){
//             //         case (colors[0]):
//             //             return console.log("Roses are beautiful, so is the color " + colors[0] + " !");
//             //             break;
//             //         case (colors[1]):
//             //             return console.log("Oranges are yummy, and they are color " + colors[1] + " !");
//             //             break;
//             //         case (n == colors[2]):
//             //             return console.log("The shine sun is " + colors[2] + " !");
//             //             break;
//             //         case (n == colors[3]):
//             //             return console.log("The grass is " + colors[3] + " !");
//             //             break;
//             //         case (n == colors[4]):
//             //             return console.log("The sky is beautiful, and it is color " + colors[4] + " !");
//             //             break;
//             //         case (n == colors[5]):
//             //             return console.log("I have no clue about the color " + colors[5] + " !");
//             //             break;
//             //         case (n == colors[6]):
//             //             return console.log("My daughter's favorite color is the color " + colors[6] + " !");
//             //             break;
//             //         default:
//             //             return console.log(colorName + " is a color not in my list");
//             //             break;
//             //     }
//             // }
for (var i = 0; i < 7; i++) {

    switch (n){
        case (colors[0]):
            return alert("Roses are beautiful, so is the color " + colors[0] + " !");
            break;
        case (colors[1]):
            return alert("Oranges are yummy, and they are color " + colors[1] + " !");
            break;
        case (colors[2]):
            return alert("The shine sun is " + colors[2] + " !");
            break;
        case (colors[3]):
            return alert("The grass is " + colors[3] + " !");
            break;
        case (colors[4]):
            return alert("The sky is beautiful, and it is color " + colors[4] + " !");
            break;
        case (colors[5]):
            return alert("I have no clue about the color " + colors[5] + " !");
            break;
        case (colors[6]):
            return alert("My daughter's favorite color is the color " + colors[6] + " !");
            break;
        default:
            return alert(colorName + " is a color not in my list");
            break;
    }
}
}
//
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message everytime you refresh the page
//  */
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
var randomNumber = Math.floor(Math.random() * 6);
var userTotal = prompt("Please enter your total purchase price");

console.log(randomNumber);
calculateTotal(randomNumber, userTotal);

function calculateTotal(y, x) {

    if (y == 1){
        var discount1 = x - (.1 * x);
        return alert("You got a discount of " + (parseFloat("0.1") * x) + " dollars (10%)." + " Your new price is " + discount1);
    }
    else if (y == 2){
        var discount2 = x - (.25 * x);
        return alert("You got a discount of " + (parseFloat("0.25") * x) + " dollars (25%)." + " Your new price is " + discount2);
    }
    else if (y == 3){
        var discount3 = x - (.35 * x);
        return alert("You got a discount of " + (parseFloat("0.35") * x) + " dollars (35%)." + " Your new price is " + discount3);
    }
    else if (y == 4){
        var discount4 = x - (.5 * x);
        return alert("You got a discount of " + (parseFloat("0.5") * x) + " dollars (50%)." + " Your new price is " + discount4);
    }
    else if (y == 5){
        var discount5 = x;
        return alert("You got a discount of " + discount5 + " dollars (100%). It is your lucky day!");
    }
    else {
        return ("You get no promotion today...SOWWY! Your price is " + x);
    }
}

var userInput = prompt("please enter your favorite day of the week");

dayofTheWeekStartsWithT(userInput.toLowerCase());
console.log(dayofTheWeekStartsWithT(userInput.toLowerCase()));

function dayofTheWeekStartsWithT(b) {
    switch (b){
        case "tuesday":
            return true;
            break;
        case "thursday":
            return true;
            break;
        default:
            return false;
            break;
    }
}

var userPassword = prompt("Please enter a password with the following specifications: \n" +
    "Must be 6 characters long." +
    "Contains at least one letter, and one number, one upper case, and one lower case.\n" +
    "Only comprised of letter and numbers.\n" +
    "And that it does not read the same backwards.");

isValidPassword(userPassword);
console.log(isValidPassword(userPassword));

function isValidPassword(p) {

    if (p.length === 6 && /\w/.test(p) && /[a-zA-Z]/.test(p) && /\w\l\u\D/.test(p)) {
        return true;
    }
    // && /[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/.test(p)
    // else if (p === "string"){
    //     return true
    // }
    // else if (p.search(/\d/) === 1) {
    //     return true;
    // } else if (p.search(/[a-zA-Z]/) === 1) {
    //     return true;
    // } else if (p.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) !== 1) {
    //     return true;
    // } else if (p !== p.split("").reverse().join("")){
    //     return true;}
    else {
        alert("Your password does not match our standards");
        return false;
    }
// :/\w\l\u\D

}

