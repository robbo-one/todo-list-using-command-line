const db = require('./db')

function list (input) {
  if (input === 'complete'){
    return db.isComplete()
      .then(todo => {
        printTodos(todo)
      }) 
      .finally(() => {
        db.close()
      })
  } else {
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
}

function printTodos (todos) {
  todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.tasks}// task completed: ${todo.completed}`)
  })
}

function logError (err) {
  console.error('Uh oh!', err.message)
}

function done(note) {
  db.deleteTodo(note)
    .finally(() => {
      db.close()
    })
}

function update(id, task) {
  db.updateTodos(id, {tasks: task})
  .finally(() => {
    db.close()
  })
}

function search(search) {
  return db.searchTodos(search)
  .then(todo => {
    printTodos(todo)
  })
  .finally(() => {
    db.close()
  })
}
function add (task) {
  return db.addTask({tasks: task, completed: 'N'})
  .finally(() => {
    db.close()
  })
}

module.exports = {
  list,
  done,
  update,
  search,
  add
}
