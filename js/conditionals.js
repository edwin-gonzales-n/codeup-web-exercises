"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

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

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

var colorName = prompt("Please enter a color name");

analyzeColor(colorName);
console.log(randomColor);

function analyzeColor(n) {

    // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    // var randomColor = colors[Math.floor(Math.random() * colors.length)];

        for (var i = 0; i < 7; i++) {

            // if (n == colors[0]) {
            //     return console.log("Roses are beautiful, so is the color " + colors[0] + " !");
            //     break;
            // }
            // else if (n == colors[1]){
            //     return console.log("Oranges are yummy, and they are color " + colors[1] + " !");
            //     break;
            // }
            // else if (n == colors[2]){
            //     return console.log("The shine sun is " + colors[2] + " !");
            //     break;
            // }
            // else if (n == colors[3]){
            //     return console.log("The grass is " + colors[3] + " !");
            //     break;
            // }
            // else if (n == colors[4]){
            //     return console.log("The sky is beautiful, and it is color " + colors[4] + " !");
            //     break;
            // }
            // else if (n == colors[5]){
            //     return console.log("I have no clue about the color " + colors[5] + " !");
            //     break;
            // }
            // else if (n == colors[6]){
            //     return console.log("My daughter's favorite color is the color " + colors[6] + " !");
            //     break;
            // }
            // else {
            //     return console.log(colorName + " is a color not in my list");
            //     break;
            // }

            // for (var i = 0; i < 7; i++) {
            //
            //     switch (n){
            //         case (colors[0]):
            //             return console.log("Roses are beautiful, so is the color " + colors[0] + " !");
            //             break;
            //         case (colors[1]):
            //             return console.log("Oranges are yummy, and they are color " + colors[1] + " !");
            //             break;
            //         case (n == colors[2]):
            //             return console.log("The shine sun is " + colors[2] + " !");
            //             break;
            //         case (n == colors[3]):
            //             return console.log("The grass is " + colors[3] + " !");
            //             break;
            //         case (n == colors[4]):
            //             return console.log("The sky is beautiful, and it is color " + colors[4] + " !");
            //             break;
            //         case (n == colors[5]):
            //             return console.log("I have no clue about the color " + colors[5] + " !");
            //             break;
            //         case (n == colors[6]):
            //             return console.log("My daughter's favorite color is the color " + colors[6] + " !");
            //             break;
            //         default:
            //             return console.log(colorName + " is a color not in my list");
            //             break;
            //     }
            // }
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
}

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var randomNumber = Math.floor(Math.random() * 6);

var userTotal = prompt("Please enter your total purchase price");

console.log(randomNumber);
calculateTotal(randomNumber, userTotal);

function calculateTotal(y, x) {

    if (y == 1){
        var discount1 = x - (.1 * x);
        return alert("Your new price is " + discount1);
    }
    if (y == 2){
        var discount2 = x - (.25 * x);
        return alert("Your new price is " + discount2);
    }
    if (y == 3){
        var discount3 = x - (.35 * x);
        return alert("Your new price is " + discount3);
    }
    if (y == 4){
        var discount4 = x - (.5 * x);
        return alert("Your new price is " + discount4);
    }
    if (y == 5){
        var discount5 = x * 0;
        return alert("Your new price is " + discount5);
    }
    else {
        return alert("You get no promotion today...SOWWY!!!");
    }
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
