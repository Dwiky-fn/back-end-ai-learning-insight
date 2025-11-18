/* eslint-disable camelcase */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('learning_activities', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      references: 'users',
      onDelete: 'CASCADE',
    },
    content_type: {
      type: 'VARCHAR(50)',
    },
    duration: {
      type: 'INTEGER',
    },
    timestamp: {
      type: 'TIMESTAMP',
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('learning_activities');
};
