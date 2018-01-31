// Loops bonuses:
//     0. Make the "99 bottles of beer" song.
// - If there's only 1 bottle, be sure your output says "bottle" not "bottles"
// - If there's 0 bottles, say "all done"
//
for (var i = 100; i >= 1; --i){
    if (i > 1){
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.\n" +
            "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall");
    } else if (i = 1){
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall\n" +
            "No more bottles of beer on the wall, no more bottles of beer. \n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else {
        console.log("all done");
    }
}


// 1. Write a loop that starts and 1 and goes to 100.
// - For multiples of 3, output the string "Fizz" instead of the number.
// - For multiples of 5, output the string "Buzz" instead of the number.
// - For multiples of both 3 and 5, output the string "FizzBuzz" instead of the number.
// - For all other numbers, print the number.
//


for (var x = 1; x <= 100; ++x) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(x + " is a --> FizzBuzz");
    } else if (x%3 == 0){
        console.log(x + " is a --> Fizz");
    } else if (x%5 ==0 ){
        console.log(x + " is a --> Buzz");
    } else console.log(x);
}


//
// 2. Write code that prints all the fibonacci numbers under 1000.
//

for (var i = 1; i <= 999; i++) {
    // // fibonacci :
    // // an = [ Phi^n - (phi)^n ]/Sqrt[5].
    // //
    // // where Phi=(1+Sqrt[5])/2 is the so-called golden mean, and phi=(1-Sqrt[5])/2
    //
    // i = ((Math.pow(((1 + Math.sqrt(5))/2), i)) - (Math.pow(((1 - Math.sqrt(5))/2),i)))/Math.sqrt(5);

    var PHi = (Math.pow(((1 + Math.sqrt(5))/2),i));
    var phi = (Math.pow(((1 - Math.sqrt(5))/2),i));
    var fibo = Math.round((PHi - phi)/Math.sqrt(5));

    if (fibo < 1000) {
        console.log(fibo);
    } else {
        break;
    }


}


// 3. Write code that prints all the prime numbers under 1000


// 99 bottles of beer on the wall, 99 bottles of beer.
//     Take one down and pass it around, 98 bottles of beer on the wall.



