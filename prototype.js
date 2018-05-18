const person = {

    init : function(name){
         this.name = name ;
    },
    myName : function(){
        console.log("My name is: " + this.name);
    }
}

const aziz = Object.create(person);
const dave = Object.create(person);
const aron = Object.create(person);


aziz.init("aziz");

dave.init("David");

 /**
  * uncomment this line to test the result
  */

//aron.init("Aron");

dave.myName = function(){
    console.log("OHHH REALLY OMG " + this.name);
}

aziz.myName();

dave.myName();

person.name = "this is not a name";


aron.myName();

console.log(person.isPrototypeOf(aziz));

console.log(person.isPrototypeOf(aron));