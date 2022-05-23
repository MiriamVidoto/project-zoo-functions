const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = species.find((element) => element.id === animalId).residents
    .sort((ageA, ageB) => ageA.age - ageB.age);
  const result = animals[animals.length - 1];
  return [result.name, result.sex, result.age];
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
