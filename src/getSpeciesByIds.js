const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return species.filter((element) => ids.includes(element.id));
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
