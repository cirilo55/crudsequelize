'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [{
      description: "Categoria 1",
      createdAt: new Date(),
      updatedAt: new Date()
    }]) ;
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {})
  }
};
