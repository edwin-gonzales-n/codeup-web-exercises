// 'use strict';
//

// Create a file named for_loops.js inside the js directory and link it to your loops.html file.
//
//     Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// For example, showMultiplicationTable(7) should output

// var userNumber = prompt("please enter a number to multiply");
//
// showMultiplicationTable(userNumber);
//
// function showMultiplicationTable(a) {
//     for (var i = 1; i < 11; ++i){
//         var result = a * i;
//         console.log(a + " * " + i + " = " + result);
//     }
// }


//
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
//     ...

// var numberBetween20and200 = Math.floor(Math.random() * 180) + 20;
// console.log(numberBetween20and200);
//
// oddOrEven();
//
// function oddOrEven() {
//     for (var i = 1; i < 11; ++i){
//         var numberBetween20and200 = Math.floor(Math.random() * 180) + 20;
//
//         if (numberBetween20and200 % 2 == 0){
//             console.log(numberBetween20and200 + " -> Your number is even");
//         } else {
//             console.log(numberBetween20and200 + " -> Your number is odd");
//         }
//     }
//
// }

// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
//
// halfTree();

function halfTree() {

    // var x,y,chr;
    // for(x=0; x <=9; x++)
    // {
    //     for (y=0; y < x; y++)
    //     {
    //         chr=chr+(x);
    //     }
    //     console.log(chr);
    //     chr='';
    // }
    // for (var i =1; i <=9; i++){
    //     i = i.toString();
    //     return console.log(i.repeat(i));
    // }
    for (var i =1; i < 10; i++){
        var output = "";
        for(var j =1; j <= i; j++){
            output += i;
        }
        console.log(output);
    }
}

// output += i;




// //
// var x,y,chr;
// for(x=1; x <=6; x++)
// {
//     for (y=1; y < x; y++)
//     {
//         chr=chr+("*");
//     }
//     console.log(chr);
//     chr='';
// }
//
//
// //Create a for loop that uses console.log to create the output shown below.
// //

//
// decreaseByFive();
//
// function decreaseByFive(){
//     for (var i=100; i > 1; i--){
//         if (i % 5 == 0){
//             console.log(i);
//         }
//     }
// }
//
// // ##########################################








