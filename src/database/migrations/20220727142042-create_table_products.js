'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('products', {
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
      peso: {
        type: Sequelize.DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      preco: {
        type: Sequelize.DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: true,
      },
      imagem: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      users_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: {tableName: 'users'},
          key: 'id'
        },
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};

