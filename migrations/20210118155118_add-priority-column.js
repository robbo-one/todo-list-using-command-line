
exports.up = function(knex) {
    return knex.schema.alterTable('todos', (t) => {
        t.integer ('priority')
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('todos', (t) => {
        t.dropColumn('priority')
    })
};
