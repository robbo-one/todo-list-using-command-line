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

function logError (err) {
  console.error('Uh oh!', err.message)
}


function done (id) {
  return db.deleteID(id)
    .then(() => {
      console.log(`Delete ${id} successful!`)
      return db.getTodos()
    })
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
/
function update (id, task) {
  return db.updateID(id, task)
    .then(() => {
      console.log(`Updated task ${id} successfully!`)
      return db.getTodos()
    })
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

function search (query) {
  return db.searchTask(query)
    .then((todos) => {
      console.log(`Found ${query}!`)
      return todos
    })
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

module.exports = {
  list,
  done,
  update,
  search
}
