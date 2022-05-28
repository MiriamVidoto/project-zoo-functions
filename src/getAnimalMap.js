const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

const names = (animal) => species.find((element) => element.name === animal).residents
  .map((name) => name.name);

const animals = (location) => species.filter((element) => element.location === location)
  .map((animal) => animal.name);

const objNames = (location) => animals(location).reduce((acc, crr) => {
  acc[crr] = names(crr);
  return acc;
}, {});

const includesName = () => locations.reduce((acc, crr) => {
  acc[crr] = objNames(crr);
  return acc;
}, {});

// const namesSorted = () => locations.reduce((acc, crr) => {
//   const animalSort = animals(crr).reduce((obj, current) => {
//     obj[current] = names(current).sort();
//     return obj;
//   }, {});
//   acc[crr] = animalSort;
//   return acc;
// }, {});

const animalMap = () => locations.reduce((acc, crr) => {
  const arrAnimals = animals(crr);
  acc[crr] = arrAnimals;
  return acc;
}, {});

function getAnimalMap(options) {
  if (options === undefined) {
    return animalMap();
  }
  if (options.includeNames) {
    return includesName();
  }
  if (options.sorted) {
    return namesSorted();
  }
  if (options.sex) {
    return 'animalMap() com nomes dos machos ou femeas';
  }
}

console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ sex: 'female' }));
// console.log(getAnimalMap({ sex: 'female', sorted: true }));
// console.log(getAnimalMap({ sorted: true }));

module.exports = getAnimalMap;
