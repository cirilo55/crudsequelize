'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clients', [{
      type_client:"Pessoa Fisica",
      cpf: "1231213",
      name: "Joaozinho Seeder",
      addressId: 1,

      createdAt: new Date(),
      updatedAt: new Date()
    }]) ;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clients', null, {})
  }
};