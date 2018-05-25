const MyArray = [0,1,2,3,4];

const NewArray = MyArray.map(x => x * 2);

const NewArrayToString = NewArray.join('*');


var array = [1, 5, 5, 4, 8];

var isThereAnyTwo = function(element) {
  return element  === 2;
};

console.log(array.some(isThereAnyTwo));