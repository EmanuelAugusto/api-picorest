'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    passWorld: DataTypes.STRING
  }, {});
  usuario.associate = function(models) {
    usuario.hasOne(models.funcionario,{

      foreignKey: 'usuarioId'
     
    })
  };
  return usuario;
};