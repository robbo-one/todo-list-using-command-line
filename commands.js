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


// function deleteTodo() {
//   return db.
function done (id) {            // id passed into done function
  return db.deleteTodo(id)      //  runs delete function in db.js file deletes that id from the todo list
  .then(() => {  
    return list ()               // Runs above list function, which returns the list less the deleted id
  })
    // .then(todos => {
    //   printTodos(todos)            // prints the list
    // })
    .catch(err => {
      logError(err)                  // if err logs err
    })
    .finally(() => {                // stops the function
      db.close()
    })
}

function update(id, message) { //takes id and message
  return db.newTask(id, message) //runs newTask function in db.js and passed id + message in as args
  .then(() => {
  return list ()                                               
  })
    .catch(err => {
      logError(err)                  
    })
    .finally(() => {                
      db.close()
    })
}

function search(searchItem) {
  return db.retrieve(searchItem)
  .then((res) => {
    console.log(res)
    printTodos(res)                                           
    })
      .catch(err => {
        logError(err)                  
      })
      .finally(() => {                
        db.close()
      })
  }

  // function complete(finishedTask){
  //   return db.finishedTask(finishedTask)
  //   .then(() => {
  //     return list()
  //   })
  //   .catch((err) => {
  //     logError(err);
  //   })
  //   .finally(() => {
  //     db.close();
  //   });
  // }


function logError (err) {
  console.error('Uh oh!', err.message)
}
//EXPORT ALL FUNCTIONS
module.exports = {
  list,
  done,
  update,
  search
}
