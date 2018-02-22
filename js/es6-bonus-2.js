const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];


// PROBLEM 1 - create an array of the first letters of each fruit
let firstLetter = fruits.map(name => {
    return name.charAt(0);
});
console.log(firstLetter);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
let userObjects = customers.map(({name,age}) => {
    return {
      name,
      age
    };
});

console.log(userObjects);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

let civilServants = customers.filter(({occupation}) =>{
   return occupation == "Teacher" || occupation == "Police Officer";
});

console.log(civilServants);

// PROBLEM 4 - determine the average age of customers

//            PROBLEM 4 HINT - use .reduce()

const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];
// complete the bonuses below...
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages

// What Ryan created during class
// const output = family.reduce((accu,person) => {
//     if (typeof accu.names == "undefined") {
//         accu.names = [];
//     }
//     if (typeof accu.ages == "undefined") {
//         accu.ages = [];
//     }
//     if (typeof accu.genders == "undefined") {
//         accu.genders = [];
//     }
//     accu.names.push(person.name);
//     accu.ages.push(person.age);
//     accu.genders.push(person.gender);
//     return accu;
// },{});

const output = {
    names: family.map(obj => obj.name),
    genders: family.map(obj => obj.gender),
    ages: family.map(obj => obj.age)
}

console.log(output);

// - Calculate the total age combined of family members

const averageAge = family.reduce((accu, person) => {accu += person.age; return accu;},0)/family.length;
console.log(parseInt(averageAge));

// - Create an array of all minors
var minors = family.filter(({age}) => {return age < 18;});
console.log(minors);

// Create an array of only female family member objects

var females = family.filter(({gender}) => {return gender === "female"});
console.log(females);

// - Create a single object with properties containing arrays of all names, genders, and ages



