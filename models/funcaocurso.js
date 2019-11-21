'use strict';
module.exports = (sequelize, DataTypes) => {
  const funcaoCurso = sequelize.define('funcaoCurso', {
    funcaoId: DataTypes.INTEGER,
    cursoId: DataTypes.INTEGER
  }, {});
  funcaoCurso.associate = function(models) {
    funcaoCurso.belongsTo(models.funcao,{

      foreignKey: 'funcaoId'

    })
    funcaoCurso.belongsTo(models.curso,{
    
      foreignKey: 'cursoId'
    })
  };
  return funcaoCurso;
};