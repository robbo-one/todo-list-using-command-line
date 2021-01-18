const config = require('./knexfile').development
const database = require('knex')(config)

function getTodos (db = database) {
  return db('todos').select()
}

// Your DB functions go here

function close (db = database) {
  db.destroy()
}

// 
function deleteID (id, db = database) {
  return db('todos').del().where('id', id)
}

function updateID (id, task, db = database) {
  return db('todos').update('task', task).where('id', id)
}

function searchTask (query, db = database) {
  return db('todos').where('task', 'like', '%' + query + '%')
}

module.exports = {
  getTodos,
  close,
  deleteID,
  updateID,
  searchTask
}
