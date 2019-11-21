'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matricula: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      ctps: {
        type: Sequelize.STRING
      },
      admissao: {
        type: Sequelize.DATE
      },
      demissao: {
        type: Sequelize.DATE
      },
      sexo: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      logradouro: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "usuarios",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      setorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "setors",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      funcaoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "funcaos",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('funcionarios');
  }
};