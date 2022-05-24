const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

const result = (speciesResponsible, employeeRenponsible) => species
  .filter((element) => speciesResponsible.includes(element.id))
  .reduce((acc, crr) => {
    acc.species += `${crr.name}`;
    acc.locations += `${crr.location}`;
    return acc;
  }, { id: employeeRenponsible.id,
    fullName: `${employeeRenponsible.firstName} ${employeeRenponsible.lastName}`,
    species: '',
    locations: '' });

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    // const employee = employees.map((element) => element.id);
    const employeeResponsibleFor = employees.map((ell) => ell.responsibleFor);
    return employeeResponsibleFor;
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
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
