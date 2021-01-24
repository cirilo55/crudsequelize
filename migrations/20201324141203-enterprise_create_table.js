'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable("enterprises",{
      id: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    cnpj:{
      type: Sequelize.DataTypes.STRING()
    },

    name: {
      type: Sequelize.DataTypes.STRING()
    },
    fantasy_name:{
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
    await queryInterface.dropTable("enterprises")

  }
};