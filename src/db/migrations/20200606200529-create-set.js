'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      WorkoutId: {
        type: Sequelize.UUID,
        references: {
          model: 'Workouts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      ExerciseId: {
        type: Sequelize.UUID,
        references: {
          model: 'Exercises',
          key: 'id',
        },
      },
      numberOfSets: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      repetitions: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      duration: {
        type: Sequelize.TIME,
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
    return queryInterface.dropTable('Sets');
  },
};
