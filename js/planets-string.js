(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    console.log('');

    planetsString = planetsArray.join("<br>");
    console.log(planetsString);

    console.log('');

    for (var i=0;i<planetsArray.length;i++) {
        planetsArray[i]=planetsArray[i]+"</li>";
    }

    planetsArray.unshift("<ul>");
    planetsArray.push("</ul>");

    var planetsStringNew = planetsArray.join("<li>");
    console.log(planetsStringNew);

})();


// ++++++++++CONVERTING BETWEEN STRING AND ARRAYS
// The .split method on strings and the .join method on arrays allow us to transform strings to arrays, and arrays to strings.
//
// ++++++++++SPLITTING
// Splitting will take a string and turn it into an array. String splitting uses a delimiter to decide where the splitting should occur. To split a string, call the split method passing the delimiter as a parameter.

// ++++++++++JOINING
// Joining will take an array and convert it to a string with the delimiter of your choice. The 'join' method is available on an array and it takes a delimiter as a parameter. Let's look at the first example again, but in reverse.