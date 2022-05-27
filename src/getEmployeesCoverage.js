const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

const result = (speciesResponsible, employeeRenponsible) => species
  .filter((element) => speciesResponsible.includes(element.id))
  .reduce((acc, crr) => {
    acc.species.push(crr.name);
    acc.locations.push(crr.location);
    return acc;
  }, { id: employeeRenponsible.id,
    fullName: `${employeeRenponsible.firstName} ${employeeRenponsible.lastName}`,
    species: [],
    locations: [] });

const allEmployees = () => {
  const employeesAll = employees.map((element) => element.id);
  const employee = employeesAll.map((id) => employees
    .find((employeeId) => employeeId.id === id));
  return employee.map((element) => result(element.responsibleFor, element));
};

const responsibleFor = (employee) => {
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  } else {
    const employeeResponsibleFor = employee.responsibleFor;
    return result(employeeResponsibleFor, employee);
  }
};

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return allEmployees();
  }
  if (obj.id !== undefined || obj.name !== undefined) {
    const employee = employees.find((employeeObj) => employeeObj.id === obj.id
    || employeeObj.firstName === obj.name
    || employeeObj.lastName === obj.name);
    return responsibleFor(employee);
  }
}

module.exports = getEmployeesCoverage;
