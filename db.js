const config = require('./knexfile').development
const database = require('knex')(config)

function getTodos (db = database) {
  return db('todos').select()
}

// Your DB functions go here

function close (db = database) {
  db.destroy()
}

function deleteTodo (id, db = database) {
  return db('todos')
    .delete()
    .where('id', id)
    .then((res) => {
      return res
    })
}

function updateTodo (id, todo, db = database){
  console.log(todo)
return db('todos')
.update({task: todo})
.where('id', id)
.then((res) => {
  return res
})
}

function searchTodo (task, db = database){
return db('todos')
.where('task', "like", `%${task}%`)
.select()
.then((res) => {
  return res
})
}



module.exports = {
  getTodos,
  close,
  deleteTodo,
  updateTodo,
  searchTodo,
}
