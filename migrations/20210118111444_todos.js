
exports.up = function(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('task')
  })
}


exports.down = function(knex) {
  return schema.droptable('todos')
};
