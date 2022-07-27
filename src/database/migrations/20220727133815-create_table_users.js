'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};