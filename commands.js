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
  .then (todos => {
    printTodos(todos)
})
}

function updateToDo(todosID, todosUpdate) {
  console.log(todosID,todosUpdate)
  return db.updateRow(todosID, todosUpdate)
  .then (todos => {
    printTodos(todos)
})
}

function returnSearch(todo){
  //console.log(todo)
  return db.searchRow(todo)
  .then (todos => {
    printTodos(todos)
})
}

function printTodos (todos) {
  for(let todo of todos) {
    console.info(`${todo.id}: ${todo.task} : ${todo.completed} :${todo.priority} :${todo.tag}`)
    }
}

function orderByPriority() {
  return db.sortByPriority()
  .then (todos => {
    printTodos(todos)
  })
}

function orderByTag() {
  return db.sortByTag()
  .then (todos => {
    printTodos(todos)
  })
  .catch(e => {
    console.log(e)
  })
  .finally(()=>{
    // console.log(todos)
    process.exit()
  })
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
  orderByPriority,
  orderByTag
}
