/
exports.up = function(knex) {
  return knex.schema.alterTable('todos', (t) => {
    t.string('completed').defaultTo('uncompleted')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('todos', (t) => {
    t.dropColumn('completed')
  })
};
