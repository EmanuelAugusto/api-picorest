'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcaoCursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      cursoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "cursos",
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
    return queryInterface.dropTable('funcaoCursos');
  }
};