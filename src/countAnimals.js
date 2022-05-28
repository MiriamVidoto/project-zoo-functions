const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(...animal) {
  if (animal.length === 0) {
    return species.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length;
      return acc;
    }, {});
  }
  const [myAnimal] = animal;
  if (myAnimal.sex === undefined) {
    return species.find((nameAnimal) => nameAnimal.name === myAnimal.specie).residents.length;
  }
  return species.find((nameAnimal) => nameAnimal.name === myAnimal.specie).residents
    .filter((animalSex) => animalSex.sex === myAnimal.sex).length;
}

// console.log(countAnimals({ specie: 'penguins' }));

// console.log(countAnimals({ specie: 'bears', sex: 'female' }));

console.log(countAnimals());

module.exports = countAnimals;
