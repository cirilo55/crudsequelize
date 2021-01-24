'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ncms', [{
      code: "NCM 1",
      description: "PIPIPIPOPOPO",
      createdAt: new Date(),
      updatedAt: new Date()
    }]) ;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ncms', null, {})
  }
};
