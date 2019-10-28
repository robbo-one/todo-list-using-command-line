const config = require('../knexfile').test
const database = require('knex')(config)

const db = require('../db')

beforeAll(()=> {
    return database.migrate.latest()
        .then(() => {
            return database.seed.run()
        })
})

test('it works', () => {
    expect(7).toBeLessThan(8)
})

test('get all finds some data', () => {
    const expected = 5

    return db.getAll(database)
        .then(todos => {
            const actual = todos.length

            expect(actual).toEqual(expected)
        })
})