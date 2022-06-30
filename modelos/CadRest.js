const Sequelize = require("sequelize");
const database = require("../db/database");

const Restaurante = database.define("restaurante", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cnpj: {
    type: Sequelize.STRING,
  },
  rua: {
    type: Sequelize.STRING,
  },
  estado: {
    type: Sequelize.STRING,
  },
  
  cidade: {
    type: Sequelize.STRING,
  }
});

module.exports = Restaurante;
