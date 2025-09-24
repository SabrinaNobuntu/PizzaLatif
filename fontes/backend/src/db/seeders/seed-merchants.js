'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('merchants', [
      { id: 'm1', name: 'Loja A', address: 'Rua 1', createdAt: new Date(), updatedAt: new Date() },
      { id: 'm2', name: 'Loja B', address: 'Rua 2', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('merchants', null, {});
  },
};
