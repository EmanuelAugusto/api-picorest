'use strict';
module.exports = (sequelize, DataTypes) => {
  const funcionarioCurso = sequelize.define('funcionarioCurso', {
    comprovante: DataTypes.STRING,
    cargaHoraria: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataConclusao: DataTypes.DATE,
    funcionarioId: DataTypes.INTEGER,
    cursoId: DataTypes.INTEGER
  }, {});
  funcionarioCurso.associate = function(models) {
    funcionarioCurso.belongsTo(models.funcionario,{
      through: 'funcionarioCursos',
      foreignKey: 'funcionarioId', 
      soucerKey: 'funcionarioId'  
    })
    funcionarioCurso.belongsTo(models.curso,{
      through: 'funcionarioCursos',
      foreignKey: 'cursoId', 
      soucerKey: 'cursoId'  
    })
  };
  return funcionarioCurso;
};