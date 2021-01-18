const db = require('./db')

function list () {
  return db.getTodos()
    .then(todos => {
      printTodos(todos)
    })
    .catch(err => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function printTodos (todos) {
  todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function deleteTodo (id) {
  return db.deleteTask(id)
    .then(todo => {
     list()
    })
    .catch(err => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
  }

  function updateTodo (id, task) {
    return db.updateTask(id, task)
      .then(task => {
       list()
      })
      .catch(err => {
        logError(err)
      })
      .finally(() => {
        db.close()
      })
    }

    function search (id, task) {
      return db.search(id, task)
        .then(task => {
         list()
        })
        .catch(err => {
          logError(err)
        })
        .finally(() => {
          db.close()
        })
      }    

function logError (err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  deleteTodo,
  updateTodo,
  search
}
