const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return entrants.reduce((acc, crr) => {
    if (crr.age === 5) {
      acc.child += 1;
    } if (crr.age === 18) {
      acc.adult += 1;
    } if (crr.age === 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.keys === undefined) {
    return 0;
  }
  const entrantsDay = countEntrants(entrants);
  const { child, adult, senior } = entrantsDay;
  return [(child * prices.child), (adult * prices.adult), (senior * prices.senior)]
    .reduce((acc, crr) => acc + crr);
}

const teste = [
  { name: 'maria', age: 5 },
  { name: 'jose', age: 5 },
  { name: 'nome1', age: 5 },
  { name: 'nome2', age: 18 },
  { name: 'nome3', age: 18 },
  { name: 'nome4', age: 50 },
];
console.log(calculateEntry(teste));

// console.log(calculateEntry());

// console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
