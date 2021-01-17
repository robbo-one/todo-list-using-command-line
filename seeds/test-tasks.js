
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, tasks: 'buy food for party'},
        {id: 2, tasks: 'buy beer for party'},
        {id: 3, tasks: 'clean the house for party'}
      ]);
    });
};
