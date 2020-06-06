'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Performances', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      setId: {
        type: Sequelize.UUID,
        references: {
          tableName: 'Sets',
          schema: 'schema',
        },
        key: 'id',
      },
      repetitions: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      weight: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Performances');
  },
};
