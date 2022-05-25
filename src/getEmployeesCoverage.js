const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

const result = (speciesResponsible, employeeRenponsible) => species
  .filter((element) => speciesResponsible.includes(element.id))
  .reduce((acc, crr) => {
    acc.species += crr.name;
    acc.locations += crr.location;
    return acc;
  }, { id: employeeRenponsible.id,
    fullName: `${employeeRenponsible.firstName} ${employeeRenponsible.lastName}`,
    species: '',
    locations: '' });

const allEmployees = () => {
  const employeesAll = employees.map((element) => element.id);
  return employeesAll;
  // aqui eu preciso percorrer a array com id de todos funcionários e criar um obj para cada.
};

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return allEmployees();
  }
  if (obj.id !== undefined) {
    const employee = employees.find((employeeId) => employeeId.id === obj.id);
    const employeeResponsibleFor = employee.responsibleFor;
    return result(employeeResponsibleFor, employee);
  }
  if (obj.name !== undefined) {
    const employee = employees.find((employeeName) => employeeName.firstName === obj.name
    || employeeName.lastName === obj.name);
    const employeeResponsibleFor = employee.responsibleFor;
    return result(employeeResponsibleFor, employee);
  }
  throw new Error('Informações inválidas');
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));
// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
