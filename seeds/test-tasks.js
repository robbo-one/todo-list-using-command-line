
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: ''},
        {id: 2, task: ''},
        {id: 3, task: ''}
      ]);
    });
};
