const config = require('./knexfile').development
const database = require('knex')(config)

function getTodos (db = database) {
  return db('todos').select()
}

// Your DB functions go here

function close (db = database) {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  deleteTask,
  updateTask,
  search,
}

// deleteTask(1)

function deleteTask (id, db = database) {
    return db('todos')
    .delete()
    .where('id', id)
    .then((res) => {
     return res
     
     
    })
    
  }

  // modify existing task 
  function updateTask (id, task, db = database) {
    console.log(task)
    const job = {task: task}
    return db('todos')
    .update(job)
    .where('id', id)
    .then((res) => {
     return res
    })  
  
  }
//searching
  function search (id, task, db = database) {
    return db('todos')
    .search()
    .where('task', task)
    .then((res) => {
     return res
    })  
 
  }
  console.log(search)