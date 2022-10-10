var axios = require('axios');

function fetchData() {
  return axios
    .get('https://randomuser.me/api/?gender=female')
    .then(function (response) {
      return response.data.results[0];
    });
}
async function giveMeFreedom() {
  try {
    const response = await fetchData();
    return response;
  } catch (e) {
    console.error(e);
  }
}

giveMeFreedom().then(function (value) {
  console.log(value);
});

/**
 * let be clear what a await?
 * inside a function marked as async, you are allowed to place
 * the await keyword in front of an expression that returns a promose
 * when you do ! this the execution of the async function is paused until
 * the promise is resolved :D
 * ressource : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await
 * Youtube Video = https://www.youtube.com/watch?v=568g8hxJJp4
 */
