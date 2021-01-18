const config = require('./knexfile').development
const database = require('knex')(config)
// let connection = database(config.development)

function getTodos (db = database) {
  return db('todos').join('completed','completed.id', '=','todos.id').select()
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
  // console.log(keyword)
  return connection('todos')
  .select('*')
  .where('task', "like" ,"%" + keyword + "%")
  .catch(e => {
    console.log(e)
  })
  .finally(()=>{
    process.exit()
  })
}

function updateCompleted(id, boolean, connection = database) {
  connection('completed')
  .join('todos','completed.id', '=','todos.id')
  .select('todos.task','completed.completed')
  .update('completed',boolean)
  .where('id',id)
  .catch(e => {
    console.log(e)
  })
  .finally(()=>{
    process.exit()
  })
}

function sortByPriority (db = database) {
  return db('todos').join('completed','completed.id', '=','todos.id').select().orderBy("priority", "asc")
  .finally(()=>{
    process.exit()
  })
}

function sortByTag (db = database){
  return db('todos').join('completed','completed.id', '=','todos.id').select().orderBy("tag", "desc")
  .finally(()=>{
    process.exit()
  })
}
// .then (todos => {
  //   todos.forEach(todo => {
  //   console.info(`${todo.id}: ${todo.task} : ${todo.completed} :${todo.priority} :${todo.tag}`)
  //   })
  // })



module.exports = {
  getTodos,
  close,
  deleteRow,
  updateRow,
  searchRow,
  updateCompleted,
  sortByPriority,
  sortByTag
}
