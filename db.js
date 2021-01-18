const config = require('./knexfile').development
const database = require('knex')(config)

function getTodos (db = database) {
  return db('todos').select()
}

// Your DB functions go here

function deleteTodo(id, db = database) {
  return db('todos')
  .delete()
  .where('id', id)
  //.then((res) => {
  //  console.log(res)
 // })
}

function newTask(id, message, db = database) {
  return db('todos')
  .update('task', message)
  .where('id', id)


}

function retrieve(searchItem, db = database) {
return db('todos')
.select()
.where('task', 'like', `%${ searchItem }%`) //find task that contains search item
}




function close (db = database) {
  db.destroy()
}

//REMEMBER TO EXPORT ALL FUNCTIONS
module.exports = {
  getTodos,
  retrieve,
  deleteTodo,
  newTask,
  close
}
