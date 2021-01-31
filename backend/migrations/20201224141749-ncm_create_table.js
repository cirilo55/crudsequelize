'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable("ncms",{
      id: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    code:{
      type: Sequelize.DataTypes.STRING(11)
    },

    description: {
      type: Sequelize.DataTypes.STRING()
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    }

    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ncms");

  }
};
