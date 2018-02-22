//  Promises class

"use strict";

// Promise must be always with capital P
// takes a resolve function and a reject functions as parameters

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
function wait (n) {
        return new Promise((resolve,reject) =>
        {   setTimeout(() => {
            resolve('Here is your data!');
            },n);
        });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// Generate a Personal Access Token for the github api.
// We will use this so that we don't get rate limited when talking to the github api. You can add the token to your requests like this:
//


// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

function githubUsername (name) {
        // fetch(url, {headers: {'Authorization': 'token b114bd729ae354a12838c75302f89437565ec289'}})
        // .then((response) => {
        //     return console.log("success");
        // })
        // .then((results) => {
        //     console.log(results);
        // });

    const gitHubLogin = {title: 'Github Login', body: 'Hello!'};
    const url = 'https://api.github.com/users/repo';
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'token b114bd729ae354a12838c75302f89437565ec289',
        },
        body: JSON.stringify(gitHubLogin),
    };
    fetch(url, options)
        .then(/* post was created successfully */)
        .catch(/* handle errors */);
}

githubUsername('edwin-gonzales-n');