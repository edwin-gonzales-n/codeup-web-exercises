(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName : "Edwin",
        lastName : "Gonzales",
    }
    console.log(person.firstName)
    console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    console.log('');

    person.sayHello = function () {
        return this.firstName + " " + this.lastName;
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    console.log('');

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];



    shoppers.forEach(function(a){
        // console.log(a.name + " " + a.amount);
        var percentage = .12 * a.amount;
        var discount = a.amount - percentage;
        if (a.amount > 200){
            console.log(a.name + " " + a.amount + " " + " your discount is: $" + percentage + ". New price: " + discount);
        } else {
            console.log(a.name + " " + a.amount + " . Sorry, you spent less than $200, so no discount");
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
            title: "The book1",
            author: {
                firstName: "Author1",
                lastName: "One"
            }
        },
        {
            title: "The book2",
            author: {
                firstName: "Author2",
                lastName: "Two"
            }
        },
        {
            title: "The book3",
            author: {
                firstName: "Author3",
                lastName: "Three"
            }
        },
        {
            title: "The book4",
            author: {
                firstName: "Author4",
                lastName: "Four"
            }
        },
        {
            title: "The book5",
            author: {
                firstName: "Author5",
                lastName: "Five"
            }
        }
        ];
    console.log(books);

    console.log('');
    console.log(books[0].title) // "The Salmon of Doubt"
    console.log(books[0].author.firstName) // "Douglas"
    console.log(books[0].author.lastName) // "Adams"


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    console.log("");

    books.forEach(function(a){

        // console.log(books.indexOf(a));

        console.log("Book # " + books.indexOf(a) + " " + "\n" +
            "Title: " + a.title + "\n" +
        "Author: " + a.author.firstName + " " + a.author.lastName + "\n" +
            "---");
    });
    console.log('');

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // var newBookObject= [];
    // createBook(newBookObject);
    // showBookInfo(newBookObject);
    //
    // function createBook (a) {
    //     alert("Please enter the name of 5 books including author name");
    //
    //     for (var i = 0; i <= 4; i++){
    //         var bookName = prompt("Please enter the book name " + i+1);
    //         var bookAuthor = prompt("Please enter book author first name " + i+1);
    //         var bookAuthorLastname = prompt("Please enter book author last name " + i+1);
    //
    //         a[i] = {
    //             title: "",
    //             author: {
    //                 firstName: "",
    //                 lastName: ""
    //             }
    //         };
    //         a[i].title = bookName;
    //         a[i].author.firstname = bookAuthor;
    //         a[i].author.lastname = bookAuthorLastname;
    //     }
    //
    //     console.log("The new array is: ")
    //     console.log(a);
    //     console.log("");
    // }


    function showBookInfo (input){
        input.forEach(function(a){

            // console.log(input.indexOf(a));

            console.log("Book # " + input.indexOf(a) + " " + "\n" +
                "Title: " + a.title + "\n" +
                "Author: " + a.author.firstName + " " + a.author.lastName + "\n" +
                "---");
        });
    }
test();
    function test () {
        // TODO: complete this method
        // hint: area = pi * radius^2
        var area = 3.1416 * Math.pow(3, 2);
        return area; // TODO: return the proper value
    }




})();
