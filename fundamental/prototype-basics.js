const animals = {
  sound: function () {
    console.log('mouuuuuu ' + this.voice);
  },
};

const cat = {
  voice: 'miaaaw',
};

//let 's create an Object extend form animals

Object.setPrototypeOf(cat, animals);

// create an Object from cat who extend from animals

const catty = Object.create(cat);

cat.sound();

catty.sound = function () {
  console.log('MOUOUOUOU ' + this.voice);
};

console.log(animals.isPrototypeOf(catty));
console.log(cat.isPrototypeOf(catty));

catty.sound();
