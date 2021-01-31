'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable("products",{
      id: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
      type: Sequelize.DataTypes.STRING()
    },
    value_price: {
      type: Sequelize.DataTypes.DOUBLE()
    },
    reference: {
      type: Sequelize.DataTypes.STRING()
    },

    ncmId:{
      type: Sequelize.DataTypes.INTEGER(11),
      reference: {
        model: "Ncm",
        key: "id"
      }
    },
    categoryId:{
      type: Sequelize.DataTypes.INTEGER(11),
      reference :{
        model: "Category",
        key: "id"
      }
    },
    aliquotId:{
      type: Sequelize.DataTypes.INTEGER(11),
      reference:{
        model: "Aliquot",
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
    }

    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  }
};
