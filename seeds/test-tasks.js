
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'save The World'},
        {id: 2, task: 'Lunch'},
        {id: 3, task: 'Survive Apocalypse'}
      ]);
    });
};
