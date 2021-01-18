//
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'vacuuming'},
        {id: 2, task: 'coding'},
        {id: 3, task: 'dishes'}
      ]);
    });
};
