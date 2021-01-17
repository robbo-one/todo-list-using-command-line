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

module.exports = {
  getTodos,
  close,
  deleteTodo
}
