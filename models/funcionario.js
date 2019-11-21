'use strict';
module.exports = (sequelize, DataTypes) => {
  const funcionario = sequelize.define('funcionario', {
    matricula: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ctps: DataTypes.STRING,
    admissao: DataTypes.DATE,
    demissao: DataTypes.DATE,
    sexo: DataTypes.STRING,
    numero: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER,
    setorId: DataTypes.INTEGER,
    funcaoId: DataTypes.INTEGER
  }, {});
  funcionario.associate = function(models) {
    funcionario.belongsTo(models.usuario,{ 
      foreignKey: 'usuarioId'
    })
    
    funcionario.belongsTo(models.setor,{ 
      foreignKey: 'setorId'
    })

    funcionario.belongsTo(models.funcao,{ 
      foreignKey: 'funcaoId'
    })
    
    funcionario.hasMany(models.funcionarioCurso,{

      foreignKey: 'funcionarioId'
        
    })
  };
  return funcionario;
};

