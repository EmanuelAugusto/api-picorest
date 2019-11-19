'use strict';
module.exports = (sequelize, DataTypes) => {
  const funcaoCurso = sequelize.define('funcaoCurso', {
    funcaoId: DataTypes.INTEGER,
    cursoId: DataTypes.INTEGER
  }, {});
  funcaoCurso.associate = function(models) {
    funcaoCurso.belongsToMany(models.funcao,{
      through: 'funcaoCursos',
      foreignKey: 'funcaoId', 
      soucerKey: 'funcaoId'  
    })
    funcaoCurso.belongsToMany(models.curso,{
      through: 'funcaoCursos',
      foreignKey: 'cursoId', 
      soucerKey: 'cursoId'  
    })
  };
  return funcaoCurso;
};