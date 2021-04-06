/**
 * En este archivo se configura la conexion 
 * a la base de datos, se obtienen los modelos
 * y se vinculan a esta.
*/

require('dotenv').config();

const {Sequelize} = require('sequelize');

const {DB_USER,DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const { generarRelaciones } = require('./relaciones');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
	logging: false, 
	native: false, 
});

const modelDefiners = [
	// require("./models/Actividad"),
	// require("./models/Pais")
];

// Injectamos la conexion (sequelize) a todos los modelos
for(const model of modelDefiners){
	model(sequelize)
}

generarRelaciones(sequelize)

//Se cambia el export ya que es mas comodo usarlo asi.
//Base  en : https://github.com/sequelize/express-example
module.exports = sequelize