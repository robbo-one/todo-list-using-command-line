
exports.seed = function(knex) {
  // Deletes ALL existing entries. (Promise is resolved with ALL?? rows being deleted)
  return knex('todos').del()
    .then(function () {
      // This function inserts seed entries by creating an insert query taking array of inserts. Promise resolved is the returned array of all added rows)
      return knex('todos').insert([
        {id: 1, task: 'Develop covid vaccine'},
        {id: 2, task: 'Sign up for trip to mars'},
        {id: 3, task: 'Buy a tesla'},
        {id: 4, task: 'Coffee'},
        {id: 5, task: 'Write science paper'},
        {id: 6, task: 'Read new book'},
        {id: 7, task: 'Complete dev academy'}
      ])
    })
}

