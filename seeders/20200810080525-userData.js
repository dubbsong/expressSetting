'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          userId: 'sam',
          userPassword: '123123',
          createdAt: '2020-08-10',
          updatedAt: '2020-08-11',
        },
        {
          userId: 'ralph',
          userPassword: '123123',
          createdAt: '2020-08-10',
          updatedAt: '2020-08-11',
        },
        {
          userId: 'leo',
          userPassword: '123123',
          createdAt: '2020-08-10',
          updatedAt: '2020-08-11',
        },
        {
          userId: 'bruce',
          userPassword: '123123',
          createdAt: '2020-08-10',
          updatedAt: '2020-08-11',
        },
      ],
      {}
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
