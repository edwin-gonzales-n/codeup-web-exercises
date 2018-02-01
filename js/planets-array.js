(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('');

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);
    //
    console.log('');
    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);
    //
    console.log('');

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);
    //
    console.log('');
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"));
    console.log('');

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);
    //
    console.log('');

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();

// +++++++ADDING ELEMENTS
// The push and unshift methods can be used to add items to an array.
//     The primary difference is that push adds an item to the end of an array,
//     and unshift adds an item to the beginning of an array.

// ++++++++++ REMOVING ELEMENTS
// The pop and shift methods can be used to remove items from an array. Both methods will return the removed item.

// ++++++++++++LOCATING ARRAYS
// Before an array is manipulated, it is sometime useful to find the index of a particular item. The indexOf and lastIndexOf array method provide this capability. The indexOf method starts searching from the beginning of an array and will return the first occurrence of what you are looking for. The lastIndexOf starts at the end of the array and works backwards.
//
// ++++++++++++SLICING
// The .slice method allows us to copy a portion of an array. The slice method optionally takes two arguments to define where the portion we want starts and stops. .slice will not modify the original array; it will return a new array.

// +++++++++REVERSING
// An array can be reversed by calling the reverse method.

// +++++++++SORTING
// An array can be sorted by calling the sort method. The sort method, by default, will convert items in the array to their string equivalent and order them based on that value.

// ++++++++++CONVERTING BETWEEN STRING AND ARRAYS
// The .split method on strings and the .join method on arrays allow us to transform strings to arrays, and arrays to strings.
//
// ++++++++++SPLITTING
// Splitting will take a string and turn it into an array. String splitting uses a delimiter to decide where the splitting should occur. To split a string, call the split method passing the delimiter as a parameter.

// ++++++++++JOINING
// Joining will take an array and convert it to a string with the delimiter of your choice. The 'join' method is available on an array and it takes a delimiter as a parameter. Let's look at the first example again, but in reverse.