'use strict';
module.exports = (sequelize, DataTypes) => {
  const curso = sequelize.define('curso', {
    descricao: DataTypes.STRING,
    cargaHoraria: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataConclusao: DataTypes.DATE
  }, {});
  curso.associate = function(models) {
    curso.hasOne(models.funcaoCurso,{

       foreignKey: 'cursoId', 
       targetKey: 'cursoId'
      
     })
     curso.hasMany(models.funcionarioCurso,{

       foreignKey: 'cursoId', 
       targetKey: 'cursoId'
      
     })
  };
  return curso;
};