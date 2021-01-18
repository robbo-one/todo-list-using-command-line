const config = require('./knexfile').development
const database = require('knex')(config)

function getTodos (db = database) {
  return db('todos').select()
}

// Your DB functions go here

function close (db = database) {
  db.destroy()
}
 

function deleteTodo (id) {
  return database("todos")
  .delete()
  .where("id", id)
  .then((res) => {
    getTodos()
  })
}

function updateTodos (id, tasks) {
  return database('todos')
  .where('id', id)
  .update(tasks)
    .then((res) => {
      getTodos()
    })
}

function searchTodos (search) {
  return database("todos")
  .select()
  .where("tasks", "like", "%" + search + "%")
}

module.exports = {
  getTodos,
  close,
  deleteTodo,
  updateTodos,
  searchTodos
}

/*
WILDCARD

"%cat%"

*/