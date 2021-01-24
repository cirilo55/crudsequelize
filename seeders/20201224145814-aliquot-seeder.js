'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('aliquots', [{
      state: "ES",
      aliquot:17,
      createdAt: new Date(),
      updatedAt: new Date()
    }]) ;
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('aliquots', null, {})
  }
};
