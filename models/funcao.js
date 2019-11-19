'use strict';
module.exports = (sequelize, DataTypes) => {
  const funcao = sequelize.define('funcao', {
    descricao: DataTypes.STRING
  }, {});
  funcao.associate = function(models) {
    // funcao.hasMany(models.funcionario,{

    //   foreignKey: 'funcaoId', 
    //   targetKey: 'funcaoId'
      
    // })
    // funcao.hasMany(models.funcaoCurso,{

    //   foreignKey: 'funcaoId', 
    //   targetKey: 'funcaoId'
      
    // })
  };
  return funcao;
};