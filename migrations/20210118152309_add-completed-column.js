const { deleteTodo } = require("../commands");

exports.up = function(knex) {
  return knex.schema.alterTable('todos', (t) => {
      t.string ('complete')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('todos', (t) => {
      t.dropColumn('complete')
  })
};
