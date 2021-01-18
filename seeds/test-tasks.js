
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Do the dishes'},
        {id: 2, task: 'Feed the cat'},
        {id: 3, task: 'Water the plants'}
      ]);
    });
};
