function combination(a, b) {
  let i = 0;
  j = 0;
  array_of_combination = [];
  for (i; i < a.length; i++) {
    for (j; j < b.length; j++) {
      array_of_combination.push({ left: a[i], right: b[j] });
    }
    j = 0;
  }
  return array_of_combination;
}

const data = {
  H: ['A', 'C', 'T'],
  V: ['G', 'C', 'A'],
  W: ['A', 'T'],
};

const acc = Object.keys(data);
const [a, b, c] = Object.values(data);
const dna = 'CATGGACTACAVGGTWTCAATHW';

function getCombination(dna) {
  // Get not stable
  let dna_extension = '';
  for (let i = 0; i < dna.length; i++) {
    if (acc.includes(dna[i])) {
      dna_extension += dna[i];
    }
  }
  console.log(dna_extension);
  for (let i = 0; i < dna_extension.length; i++) {
    for (let j = i; j < dna_extension.length - 1; j++) {
      console.log(
        combination(data[dna_extension[i]], data[dna_extension[j + 1]]),
      );
    }
  }
  return 'end';
}

console.log(getCombination(dna));
