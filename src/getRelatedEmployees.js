const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managerOf = employees.filter((ele) => ele.managers.includes(managerId));
    return managerOf.map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
