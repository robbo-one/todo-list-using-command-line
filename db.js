const config = require('./knexfile').development
const database = require('knex')(config)
// let connection = database(config.development)

function getTodos (db = database) {
  return db('todos').join('completed','completed.id', '=','todos.id').select()
  .then (todos => {
    todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.task} : ${todo.completed}`)
    })
  })
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
  .then (todos => {
    // console.log(todo)
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
  .then (todos => {
    todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.task} : ${todo.completed} :${todo.priority} `)
    })
  })
  .finally(()=>{
    process.exit()
  })
}

function sortByTag (db = database){
  return db('todos').join('completed','completed.id', '=','todos.id').select().orderBy("tag", "desc")
  .then (todos => {
    todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.task} : ${todo.completed} :${todo.priority} :${todo.tag}`)
    })
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
  searchRow,
  updateCompleted,
  sortByPriority,
  sortByTag
}
