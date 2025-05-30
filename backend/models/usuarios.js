const { DataTypes } = require('sequelize');
const sequelize = require('../conexion');

const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    sexo: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Usuario;
