//This function creates a new table in the database, with a callback function to modify the table's structure using the schema-building commands: We want "id" and "task".  Table.(func) are the two callback functions that run AFTER the table is created.

exports.up = function(knex) {
    return knex.schema.createTable('todos', (table) => {
        table.increments('id')
        table.string('task')
    }) 
}

exports.down = function(knex) {
  
};
