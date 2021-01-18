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
function deleteTodo (id) {
  return db.done(id)
  .then(numberDeleted => {
    console.log(numberDeleted)
  })
  .catch(err => {
    logError(err)
  })
  .finally(() => {
    db.close()
  })
}

function updateTodo (id, todo) {
  return db.update(id, todo)
  .then(numberUpdated => {
    console.log(numberUpdated)
  })
  .catch(err => {
    logError(err)
  })
  .finally(() => {
    db.close()
  })
}

function searchTodo (word) {
  return db.search(word)
  .then()
  .catch(err => {
    logError(err)
  })
  .finally(() => {
    db.close()
  })
}


function completeTodo (id, word) {
  return db.complete(id, word)
  .then()
  .catch(err => {
    logError(err)
  })
  .finally(() => {
    db.close()
  })
}

function priorityTodo (id, word) {
  return db.priority(id, word)
  .then()
  .catch(err => {
    logError(err)
  })
  .finally(() => {
    db.close()
  })
}

function printTodos (todos) {
  todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.task}, ${todo.complete}, priority: ${todo.priority}`)
  })
}

function logError (err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  deleteTodo,
  updateTodo,
  searchTodo,
  completeTodo,
  priorityTodo
}
