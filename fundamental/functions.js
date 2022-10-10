const x = {
    val: 8,
};

const z = (x) => Object.assign({}, x, { val: x.val + 1 });

const y = (x) => Object.assign({}, x, { val: x.val * 2 });

console.log(z(y(x)));
console.log(y(z(x)));
