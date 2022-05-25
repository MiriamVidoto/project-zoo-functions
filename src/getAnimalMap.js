const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

const animalMap = () => locations.reduce((acc, crr) => {
  const arrAnimals = species.filter((element) => element.location === crr)
    .map((animal) => animal.name);
  acc[crr] = arrAnimals;
  return acc;
}, {});

function getAnimalMap(options) {
  if (options === undefined) {
    return animalMap();
  }
  if (options.includeNames) {
    return 'animalMap() com nomes';
  }
  if (options.sorted) {
    return 'animalMap() com nomes em ordem alfabetica';
  }
  if (options.sex) {
    return 'animalMap() com nomes dos machos ou femeas';
  }
}

// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ sex: 'female' }));
// console.log(getAnimalMap({ sex: 'female', sorted: true }));
// console.log(getAnimalMap());

module.exports = getAnimalMap;
