const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

//
// Create a file named map-filter-reduce.js in your js directory and copy the data below into it.
//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//     Use .map to create an array of strings where each element is a user's email address
// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user



let trilingual = users.filter(function(n){
    return n.languages.length >= 3;
});
// console.log(trilingual);

let emails =  users.map(n => n.email);
// console.log(emails);

const testArray = []
// let userIDs = users.reduce((a, b, c, d) => {testArray.push({id:d[c].id, name:d[c].name});
// }, {});

let userIDs = users.reduce((accum, b) => {
    accum[b.id] = b;
    return accum;
},{});

console.log(userIDs);

