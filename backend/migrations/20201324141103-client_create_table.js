'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable("clients",{
      id: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type_client:{
      type: Sequelize.DataTypes.STRING()
    },

    cpf: {
      type: Sequelize.DataTypes.STRING()
    },
    name:{
        type: Sequelize.DataTypes.STRING()
    },

    addressId:{
        type: Sequelize.DataTypes.INTEGER(11),
        reference:{
          model: "Address",
          key:"id"
        }
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
    await queryInterface.dropTable("clients")

  }
};