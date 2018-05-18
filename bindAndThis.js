import { error } from "util";

var food = {
	type : "sweet",
	getFood : function(){
		return "wow hmmmm " + this.type;
	}
}

const banana = food.getFood;

var bananaGetType = banana.bind(food);


var Validator = {

	string :(value) => {
	  if(typeof(value) !== "string"){
		return new error("this prop should be a string");
	  }else{
		return value;
	  }
	}
  }

  const name = Validator.string();

console.log(name);

console.log(bananaGetType());