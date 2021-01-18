
exports.up = function(knex) {
  return knex.schema.alterTable('todos', (table) => {
  table.integer("priority").default(5)
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('todos', (table) => {
    table.dropColumn("priority")
  })
};
