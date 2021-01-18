const db = require("./db");

function list() {
  return db
    .getTodos()
    .then((todos) => {
      printTodos(todos);
    })
    .catch((err) => {
      logError(err);
    })
    .finally(() => {
      db.close();
    });
}

function done(id) {
  return db
    .deleteTodo(id)
    .then((res) => {
      // console.log(res, 'rows deleted')
      list()
    })
    .catch((err) => {
      logError(err);
    })
    .finally(() => {
      db.close();
    });
}

function update(id, todo){
  return db
  .updateTodo(id, todo)
  .then((res) => {
    list()
  })
  .catch((err) => {
    logError(err);
  })
  .finally(() => {
    db.close();
  });
}

function search(task){
  return db
  .searchTodo(task)
  .then((res) => {
    return printTodos(res)
  })
  .catch((err) => {
    logError(err);
  })
  .finally(() => {
    db.close();
  });
}

function check(id, todo){
  return db
  .checklistTodo(id, todo)
  .then((res) => {
    list()
  })
  .catch((err) => {
    logError(err);
  })
  .finally(() => {
    db.close();
  });
}

function create(id, todo){
  return db
  .createTodo(id, todo)
  .then((res) => {
    list()
  })
  .catch((err) => {
    logError(err);
  })
  .finally(() => {
    db.close();
  });
}


function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`);
  });
}

function logError(err) {
  console.error("Uh oh!", err.message);
}

module.exports = {
  list,
  done,
  update,
  search,
  check,
  create,
};
