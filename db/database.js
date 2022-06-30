const Sequelize = require('sequelize');
const sequelize = new Sequelize({ 
    dialect: 'sqlite',
    storage: './db/storage/database.sqlite'
});

module.exports = sequelize;

//axios instalar dentro do expo para executar uma rota na api