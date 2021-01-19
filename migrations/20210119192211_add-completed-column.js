//**Had assistance with this code:

exports.up = function(knex) {
       return knex.schema.alterTable('todos', (t) => {
        t.string('finished').defaultTo('inprogress')})
    }        
//Deletes column 
exports.down = function(knex) {
    return knex.schema.alterTable('todos', (t) => {
        t.dropColumn('finished')
    })
}


