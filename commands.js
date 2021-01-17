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
    console.info(`${todo.id}: ${todo.tasks}`)
  })
}

function logError (err) {
  console.error('Uh oh!', err.message)
}

function done (note) {
  db.deleteTodo(note)
}

module.exports = {
  list,
  done
}
