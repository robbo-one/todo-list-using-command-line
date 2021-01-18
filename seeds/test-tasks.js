
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, tasks: 'buy food for party', completed: 'N'},
        {id: 2, tasks: 'buy beer for party', completed: 'Y'},
        {id: 3, tasks: 'clean the house for party', completed: 'N'}
      ]);
    });
};
