let text = "--hello? everyone let's try play with !th1s";

function truncateText(text, n) {
  return text.replace(/[a-z,A-Z]+/g, (p) => p.slice(0, n));
}

console.log(truncateText(text, 3));
