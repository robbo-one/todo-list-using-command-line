const config = require('./knexfile').development
const database = require('knex')(config)
// let connection = database(config.development)

function getTodos (db = database) {
  return db('todos').select()
}

// Your DB functions go here

function close (db = database) {
  db.destroy()
}

function deleteRow (id, connection = database) {
  connection('todos')
  .delete()
  .where('id',id)
  .catch(e => {
    console.log(e)
  })
  .finally(()=>{
    process.exit()
  })
}

function updateRow(id, updatedTask, connection = database) {
  connection('todos')
  // console.log(id)
  .update("task", updatedTask)
  .where("id", id)
  .catch(e => {
    console.log(e)
  })
  .finally(()=>{
    process.exit()
  })
}

function searchRow(keyword, connection = database) {
  return connection('todos')
  .select('*')
  .where('task',keyword)
  .then (todos => {
    console.log(todo)
    todos.forEach(todo => {
      console.info(`${todo.id}: ${todo.task}`)
})
})
  .catch(e => {
    console.log(e)
  })
  .finally(()=>{
    process.exit()
  })
}


module.exports = {
  getTodos,
  close,
  deleteRow,
  updateRow,
  searchRow
}
