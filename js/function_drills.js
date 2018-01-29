'use strict';

// function sayhello(name){
//     return ("Hello " + name);
// }
//
// var usersname = prompt("What is your name?")
// alert(sayhello(usersname));
//
// //     Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string.
//
// function capitalize(string){
//     var allLowerCase = string.toLowerCase();
//     return (allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1));
// }
// alert("Here is your name with the first letter capitalized and all lower case: " + "\n" + capitalize(usersname));

var bowelsInput = prompt("type a single letter, any letter");
console.log(isVowel(bowelsInput));

function isVowel(letter) {
    var vowels = ["a", "e", "i", "o", "u"];
     var text = letter.toLowerCase(letter);

    for (var i = 0; i < 5; i++) {

        if (text === vowels[0]){
            return ("YES!!!  you have a vowel and is " + vowels[0] + " !");
            break;
        }
        else if (text === vowels[1]){
            return ("YES!!!  you have a vowel and is " + vowels[1] + " !");
            break;
        }
        else if (text === vowels[2]){
            return ("YES!!!  you have a vowel and is " + vowels[2] + " !");
            break;
        }
        else if (text === vowels[3]){
            return ("YES!!!  you have a vowel and is " + vowels[3] + " !");
            break;
        }
        else if (text === vowels[4]){
            return ("YES!!!  you have a vowel and is " + vowels[4] + " !");
            break;
        }
        else {
            return (text + " is not a vowel");
            break;
        }
    }

}

var userUpperCase = prompt("Please enter a word");
var confirmation = confirm("Would you like to convert this word to uppercase?");

switch (confirmation){
    case true:
        alert("OK, great, i will convert it for you");
        upperCase(userUpperCase);
        break;
    default:
        alert("OK, thank you anyways!");
}

function upperCase(string){
    return alert("Your new word is " + string.toUpperCase());
}


//
// // Make a function named identity(input) that returns the input exactly as provided.

var userIdentity = prompt("Please enter your full name");

function indentity(input){


}
// //     Make a function named isOdd(number)
// function isOdd(number){
//
// }
// // Make a function named isEven(number)
// function isEven(number){
//
// }
// // Make a function named isPositive(number)
// function isPositive(number){
//
// }
// // Make a function named isNegative(number)
// function isNegative(number){
//
// }
// // Make a function named isBoolean(input)
// function isBoolean(input){
//
// }
// // Make a function named isTrue(boolean)
// function isTrue(boolean){
//
// }
// // Make a function named isFalse(boolean)
// function isFalse(boolean){
//
// }
// // Make a function named isTruthy(input)
// function isTruthy(input) {
//
// }
// // Make a function named isFalsy(input)
// function isFalsy(input) {
//
// }

//
// Ternary Operator (Shorthand If/Else)

// 'use strict';
//
// var message;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
//
// // the above if/else can be re-written as:
// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";




// // Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels
// function hasVowels(string) {
//
//     var vowel = string.valueOf(isVowel(string));
//
//     if (vowel == true)
//     {
//         alert("Your string has vowels!");
//     }
//     else{
//         alert("Your string does not have vowels");
//     }
//
// }




// Make a function named isConsonant(letter)
// Make a function named hasConsonants(string)
// Make a function named isCapital(letter)
// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
//     Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named hasSpaces(string) that returns if a string has any space characters
// Make a function named isZero(number)
// Make a function named increment(number) that returns a number plus one
// Make a function named decrement(number) that returns a number minus one
// Make a function named isFive(input)
// Make a function named addFive(input) that adds five to some input.
//     Make a function named isMultipleOfFive(input)
// Make a function named isThree(input)
// Make a function named isMultipleOfThree(input)
// Make a function named isMultipleOfThreeAndFive(input)
// Write a function named lowerCase(string)
// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
//     Write a function named add(a, b) that returns the sum of a and b
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named isNumeric(input) returns true/false if the input is a number or numeric string
// Make a function named trim(string) that removes empty spaces before and after the input.
//
//
//     Add CommentCollapse
//
//
// Message #teddy
//
// *bold* _italics_ ~strike~ `code` ```preformatted``` >quote
// Thread
// snackaroo, Tristan, and paulv
//  sh -c "$ (curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"- c "$ (curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
