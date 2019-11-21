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
      foreignKey: 'funcionarioId'

    })
    funcionarioCurso.belongsTo(models.curso,{
      foreignKey: 'cursoId'
        
    })
  };
  return funcionarioCurso;
};