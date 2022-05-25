const data = require('../data/zoo_data');

const { species, hours } = data;
const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = species.map((element) => element.name);

const exhibitionAnimal = (exhibitionDay) => species.filter((element) => element.availability
  .includes(exhibitionDay)).map((ell) => ell.name);

const createObj = (array) => array.reduce((acc, crr) => {
  const day = hours[crr];
  if (crr === 'Monday') {
    acc[crr] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    acc[crr] = { officeHour: `Open from ${day.open}am until ${day.close}pm`,
      exhibition: exhibitionAnimal(crr),
    };
  }
  return acc;
}, {});

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  if (days.includes(scheduleTarget)) {
    return createObj([scheduleTarget]);
  }
  return createObj(days);
}
// console.log(getSchedule('penguins'));
console.log(getSchedule('Tuesday'));
// console.log(getSchedule());
// console.log(getSchedule('qualquercoisa'));

module.exports = getSchedule;
