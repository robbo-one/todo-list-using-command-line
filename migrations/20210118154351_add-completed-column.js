
exports.up = function(knex) {
  return knex.schema.alterTable('todos', (table) => {
    table.boolean("done").defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('todos', (table) => {
    table.dropColumn("done")
  })
};
