const config = require('./knexfile').development
const connection = require('knex')(config)


function getTodos () {
  return connection('todos').select()
}

// Your DB functions go here
function done (id) {
  return connection('todos')
  .del()
  .where('id', id)
}

function update (id, todo) {
  return connection('todos')
  .update({task : todo})
  .where('id', id)
  .then((res) => {
    console.log(res)
    getTodos()
  })
}

function close (db = connection) {
  db.destroy()
}

module.exports = {
  getTodos, 
  done,
  close,
  update
}
