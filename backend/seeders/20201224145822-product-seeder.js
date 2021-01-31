'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [{
      description:"Descrição",
      value_price: 123,
      reference: "Referencia",
      categoryId: 1,
      ncmId:1,
      aliquotId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]) ;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {})
  }
};
