
const {authorService} = require('../services');


const getByName = async (name) => {
  const result = await authorService.getByName(name);
  return result
};

module.exports = {
    getByName,
};
