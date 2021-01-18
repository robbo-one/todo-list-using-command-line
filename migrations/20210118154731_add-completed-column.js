
exports.up = function(knex) {
  return knex.schema.alterTable('todos', (t) => {
    t.string('completed')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('todos', (t) => {
    t.dropColumn('completed')
  })
};
