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

function deleteToDo(todos) {
  console.log(todos)
  return db.deleteRow(todos)
}

function updateToDo(todosID, todosUpdate) {
  console.log(todosID,todosUpdate)
  return db.updateRow(todosID, todosUpdate)
}


function printTodos (todos) {
  todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError (err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  deleteToDo,
  updateToDo
}
