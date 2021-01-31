'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable("client_enterprise",{
      id: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    enterpriseId:{
        type: Sequelize.DataTypes.INTEGER(),
        reference:{
          model: "Enterprise",
          key:"id"
        },
        onDelete: "cascade",
        allowNull: false
    },

    clientId: {
        type: Sequelize.DataTypes.INTEGER(),
        reference:{
            model: 'Client',
            key:"id",
   
        },           
         onDelete: "cascade",
         allowNull: false
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
    },
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("client_enterprise")

  }
};