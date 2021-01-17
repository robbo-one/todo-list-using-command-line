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

module.exports = {
  getTodos,
  close,
  deleteID
}
