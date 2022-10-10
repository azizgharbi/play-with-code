const MyArray = [0, 1, 2, 3, 4];

const NewArray = MyArray.map((x) => x * 2);

const NewArrayToString = NewArray.join('*');

var array = [1, 5, 5, 4, 8];

var isThereAnyTwo = function (element) {
  return element === 2;
};

const test = 'aziz,kakakaka,kakakak';

const hello = test.split(',');

hello.forEach(function (el, value) {
  //console.log(el + value);
});

for (let index = 0; index < hello.length; index++) {
  //console.log("can we " + hello[index]);
}

//console.log("apple,cherry,coco".split(",").map(el => el + " < 3 ").join("+ ").concat(" = fruits".concat(" love".toUpperCase())));

const arrayOfNumbers = [2, 5, 6, 7, 8];

const arrayOfNumbers2 = [45, 666, 677, 433];

const MaxFromArrays = Math.max(...arrayOfNumbers.concat(arrayOfNumbers2));

arrayOfNumbers2.push(...arrayOfNumbers);

console.log(arrayOfNumbers2);
