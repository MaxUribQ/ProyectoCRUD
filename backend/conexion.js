const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './usuarios.sqlite'
});

module.exports = sequelize;
