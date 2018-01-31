(function(){
    "use strict";
    // Please follow the instructions below.
    //
    //     Download iterating.js and save it to your js directory.
    //     Create an HTML file named iterating_arrays_js.html.
    //     Add a <script> tag to your HTML to include iterating.js.
    //     Open iterating.js and complete the TODO items there.
    //     View the results in your browser to test for the expected output.

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Graciela', 'Yolanda', 'Gonzito', 'Manuelito'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    names.forEach(function (element, index, array) {
        console.log("the element at index " + index + " is " + element + ".");
    });

    console.log('');
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */


    for (var i = 0; i < names.length; ++i ) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('');

    names.forEach(function (element, index, array) {
        console.log(element);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array

     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log('');

    first(names);
    second(names);
    last(names);

    function first(a) {
        console.log(a[0]);
    }
    function second(a) {
        console.log(a[1]);
    }
    function last(a) {
        console.log(a[(a.length - 1)]);
    }

})();
