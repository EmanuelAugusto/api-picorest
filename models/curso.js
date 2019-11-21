'use strict';
module.exports = (sequelize, DataTypes) => {
  const curso = sequelize.define('curso', {
    descricao: DataTypes.STRING,
    cargaHoraria: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataConclusao: DataTypes.DATE
  }, {});
  curso.associate = function(models) {
    curso.hasMany(models.funcaoCurso,{

       foreignKey: 'cursoId'
      
     })
     curso.hasMany(models.funcionarioCurso,{

       foreignKey: 'cursoId'
      
     })
  };
  return curso;
};