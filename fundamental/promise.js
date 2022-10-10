var axios = require('axios');

var funnyYou = new Promise(function (resolve, reject) {
    let choc = true;
    if (choc) {
        resolve(100);
    } else {
        reject('hey dude this not funny');
    }
});

//call My promise funny function

funnyYou
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    });

// let's fetch some data guys i know it's easy but i am trying to undestand some basics here so ...

/*
 * API GENERATOR: https://randomuser.me/
 * SERVICE: https://randomuser.me/api/
 */

var hereSomeData = new Promise(function (resolve, reject) {
    axios
        .get('https://randomuser.me/api/?gender=female')
        .then(function (response) {
            resolve(response.data.results);
        })
        .catch(function (error) {
            reject('fuck you link est pas bon malade');
        });
});

hereSomeData
    .then(function (value) {
        console.log(value);
        return "maybe u're alright";
    })
    .then(function (response) {
        console.log('one: ' + response);
        return 'oh really?';
    })
    .then(function (response) {
        console.log('two: ' + response);
    })
    .catch(function (error) {
        console.log(error);
    });

/** Wanna see somthing awesome :D ok look at this */

const love = Promise.all([funnyYou, hereSomeData], function (values) {
    console.log(values);
});
