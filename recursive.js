function range(x, y) {
  x;
  return x === y - 1 ? [] : [x + 1, ...range(x + 1, y)];
}

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

function fibonacci(rep) {
  rep;
  return rep === 1 ? [0, 1] : [...fibonacci(rep - 1), rep - 2 + rep - 1];
}

function search(arr, num, i = 0) {
  var find = arr.length > i && arr[i] != num ? search(arr, num, i + 1) : arr[i];
  return find ? true : false;
}

search([1, 55, 88, 9, 4], 4); //?

/**
 *  Exercice 1
 */

const data = [
  {
    id: "1",
    parentId: 0,
    name: "Identification Cards",
    children: [
      {
        id: "2",
        parentId: "1",
        name: "Federal Cards",
        children: [
          {
            id: "3",
            parentId: "2",
            name: "Canadian Passport",
            children: []
          },
          {
            id: "4",
            parentId: "2",
            name: "Canadian Permanent Resident Card",
            children: []
          },
          { id: "5", parentId: "2", name: "Certificate of Indian Status", children: [] }
        ]
      },
      {
        id: "6",
        parentId: "1",
        name: "Provincial Cards",
        children: [
          {
            id: "7",
            parentId: "6",
            name: "Driver license",
            children: [
              {
                id: "8",
                parentId: "7",
                name: "Alberta's driver's license",
                children: []
              },
              {
                id: "9",
                parentId: "7",
                name: "British Columbia driver license",
                children: []
              },
              { id: "10", parentId: "7", name: "Manitoba driver license", children: [] },
              {
                id: "11",
                parentId: "7",
                name: "New Brunswick's driver's license",
                children: []
              },
              {
                id: "12",
                parentId: "7",
                name: "Newfoundland and Labrador's driver's license",
                children: []
              },
              {
                id: "13",
                parentId: "7",
                name: "Northwest territories's driver's license",
                children: []
              },
              {
                id: "14",
                parentId: "7",
                name: "Nova Scotia's driver's license",
                children: []
              },
              {
                id: "15",
                parentId: "7",
                name: "Nunavut's driver's license",
                children: []
              },
              {
                id: "16",
                parentId: "7",
                name: "Ontario's driver's license",
                children: []
              },
              {
                id: "17",
                parentId: "7",
                name: "Prince Edward Island's driver's license",
                children: []
              },
              {
                id: "18",
                parentId: "7",
                name: "Quebec's driver's license",
                children: []
              },
              {
                id: "19",
                parentId: "7",
                name: "Saskatchewan's driver's license",
                children: []
              },
              { id: "20", parentId: "7", name: "Yukon's driver's license", children: [] }
            ]
          }
        ]
      }
    ]
  }
];

const getPath = (arr, id) => {
  for (let child of arr) {
    if (child.id == id) {
      return id;
    } else if (child.children.length > 0) {
      var x = getPath(child.children, id);
      if (x) return child.id + "-" + x;
    }
  }
};

/**
 * Exercice 2
 * Write a javascript function that takes an array of
 * numbers and a target number. The function should find two different
 * numbers in the array that, when added together, give the target number.
 * For example: answer([1,2,3], 4) should return [1,3]
 */

const total = (arr, num) => {
  if (arr.length < 1) return;

  const [first, ...rest] = arr.sort();

  for (let i = 0; i < rest.length; i++) {
    if (first + rest[i] === num) return [first, rest[i]];
  }

  return total(rest, num);
};

console.log(total([1, 2, 3], 4));
console.log(total([1, 3, 5], 8));
