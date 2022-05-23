const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // return entrants.reduce((acc, crr) => {
  //   if (crr.age === 5) {
  //     acc.child += 1;
  //   } if (crr.age === 18) {
  //     acc.adult += 1;
  //   } if (crr.age === 50) {
  //     acc.senior += 1;
  //   }
  //   return acc;
  // }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  console.log(entrants);
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  return 1;
}

// const teste = [
//   { name: 'maria', age: 5 },
//   { name: 'jose', age: 5 },
//   { name: 'nome1', age: 5 },
//   { name: 'nome2', age: 18 },
//   { name: 'nome3', age: 18 },
//   { name: 'nome4', age: 50 },
// ];
// console.log(calculateEntry(teste));

// console.log(calculateEntry());

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
