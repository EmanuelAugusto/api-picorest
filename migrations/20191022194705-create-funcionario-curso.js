'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionarioCursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comprovante: {
        type: Sequelize.STRING
      },
      cargaHoraria: {
        type: Sequelize.STRING
      },
      dataInicio: {
        type: Sequelize.DATE
      },
      dataConclusao: {
        type: Sequelize.DATE
      },
      funcionarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "funcionarios",
          key: "id"
        }
      },
      cursoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "cursos",
          key: "id"
        }
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
    return queryInterface.dropTable('funcionarioCursos');
  }
};