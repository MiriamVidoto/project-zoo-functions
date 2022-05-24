const data = require('../data/zoo_data');

const { species, hours } = data;
const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const createObj = () => {
  days.reduce((acc, crr) => {
    acc[crr] = 'officeHour';
    return acc;
  }, {});
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return createObj();
  }
  if (days.includes(scheduleTarget)) {
    return hours[scheduleTarget];
  }
  return species.find((animal) => animal.name === scheduleTarget).availability;
}

console.log(getSchedule('penguins'));
// console.log(getSchedule('Friday'));
console.log(getSchedule());

module.exports = getSchedule;
