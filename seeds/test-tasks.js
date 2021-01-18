
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'rake them leaves'},
        {id: 2, task: 'clean the gutters'},
        {id: 3, task: 'sweep'}
      ]);
    });
};
