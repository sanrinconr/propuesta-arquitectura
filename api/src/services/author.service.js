//Simulation of db
const authors = {
    Flavio: {
      name: 'Flavio',
      age: 36,
    },
    Roger: {
      name: 'Roger',
      age: 7,
    },
  }

//Aqui se deberian utilizar los modelos y pedirle a sequelize lo que toque

const getByName = async (name) => {
	return authors[name]
};

module.exports = {
	getByName,
};