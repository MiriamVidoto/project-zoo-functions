const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeesCoverage(obj) {
  if (obj.id !== undefined) {
    const employee = employees.find((employeeId) => employeeId.id === obj.id);
    const animalLocal = employee.responsibleFor
      .forEach((animalId) => {
        return species.find((element) => {
          return element.id === animalId;
        });
      });
      return animalLocal;
    // return species.find((element) => element.id === animalId[0]).location;
  }
  // recebe obj.name ou ojb.id
  // encontra a pessoa
  // encontra as especies que a pessoa é responsável
  // procura as localizações das espécies
  // retorna um objeto
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
