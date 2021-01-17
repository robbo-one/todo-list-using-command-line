
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {task: 'vacuum'},
        {task: 'walking'},
        {task: 'take out the rubbish'}
      ]);
    });
};
