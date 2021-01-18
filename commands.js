const db = require('./db')

function list () {
  return db.getTodos()
    // .then(todos => {
    //   printTodos(todos)
    // })
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

function returnSearch(todo){
  //console.log(todo)
  return db.searchRow(todo)
//   .then (todos => {
//     // console.log(todo)
//     printTodos(todos)
// })
}

function printTodos (todos) {
  todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function prioritise() {
  return db.sortByPriority()
}


function markCompleted (id, completed) {
  return db.updateCompleted(id, completed)
}

function logError (err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  deleteToDo,
  updateToDo,
  returnSearch,
  markCompleted,
  prioritise
}
