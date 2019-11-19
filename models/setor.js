'use strict';
module.exports = (sequelize, DataTypes) => {
  const setor = sequelize.define('setor', {
    descricao: DataTypes.STRING
  }, {});
  setor.associate = function(models) {
    // setor.hasMany(models.funcionario,{
  
    //   foreignKey: 'setorId', 
    //   targetKey: 'setorId'
      
    // })
  };
  return setor;
};