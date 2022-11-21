/* 
  Having fun solving cassido newsletter:
  Interview question of the week
*/

/*
  This week’s question (thanks to Will for sharing it):
  Given a list of strings arr, and a max size n, 
  return a new list where the strings (from left to right) are joined together with a space. 
  so that each new string is less than or equal to the max size.
*/

function combineStrings(list, limit) {
  let j = 0,
    l = 0,
    arr = [];
  for (let i = 0; i < list.length; i++) {
    arr[j] = (arr[j] || '').concat(list[i] + ' ');
    l = arr[j].concat(list[i + 1]).length;
    if (l >= limit) {
      arr[j] = arr[j].slice(0, -1);
      j++;
    }
  }
  return arr;
}

console.log(combineStrings(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 12));
console.log(combineStrings(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5));
console.log(combineStrings(['alpha', 'beta', 'gamma', 'delta', 'epsilon'], 20));
