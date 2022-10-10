// Array loop
function quickLoop(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log('i: ', i, ' j: ', j);
    }
  }
}

// Swap function
function swap(a: number, b: number): number[] {
  return [b, a];
}

//bubble sort
function quickSort2(arr: number[]): number[] {
  for (let j = 0; j < arr.length - j + 1; j++) {
    if (arr[j] < arr[j + 1]) {
      const [next, previous] = swap(arr[j], arr[j + 1]);
      arr[j] = next;
      arr[j + 1] = previous;
    }
  }
  return arr;
}

console.log(quickSort2([77, 900, 2, 10]));
