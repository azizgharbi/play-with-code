function fb(x, y, n) {
  const arr = [x, y];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

function fbr(x, y, n, arr = [x, y], i = 2) {
  if (i === n) {
    return arr;
  } else {
    arr[i] = arr[i - 1] + arr[i - 2];
    fbr(x, y, n, arr, i + 1);
  }
  return arr;
}

console.log(fbr(10, 20, 5));
console.log(fb(10, 20, 5));
