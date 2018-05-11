var axios = require("axios");


function fetchData(){
	return axios.get('https://randomuser.me/api/?gender=female').then(function(response){
			return  response.data.results[0];
	});
}
async function giveMeFreedom(){

	try{

		const response = await fetchData();

		return response;
  
	}catch(e){

		console.error(e);

	}
}

 giveMeFreedom().then(function(value){
	 console.log(value);
 })
