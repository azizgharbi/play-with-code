const animals = {
    sound : function(){
        console.log("mouuuuuu " + this.voice);
    }
}

const cat = {
    voice : "miaaaw"
}

Object.setPrototypeOf(cat,animals);
const catty = Object.create(cat);

cat.sound();

console.log(animals.isPrototypeOf(catty));
console.log(cat.isPrototypeOf(catty));


catty.sound();