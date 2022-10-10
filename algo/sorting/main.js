// Array loop
function quickLoop(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log('i: ', i, ' j: ', j);
    }
  }
}
// Swap function
function swap(a, b) {
  return [b, a];
}
//bubble sort
function quickSort2(arr) {
  for (var j = 0; j < arr.length - j + 1; j++) {
    if (arr[j] < arr[j + 1]) {
      var _a = swap(arr[j], arr[j + 1]),
        next = _a[0],
        previous = _a[1];
      arr[j] = next;
      arr[j + 1] = previous;
    }
  }
  return arr;
}
console.log(quickSort2([77, 900, 2, 10]));
