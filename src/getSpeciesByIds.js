const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return species.filter((element) => ids.includes(element.id));
}

module.exports = getSpeciesByIds;
