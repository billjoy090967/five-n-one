const starwarsObj = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createstarwars = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, starwarsObj)
})

const starwars = map(createstarwars, keys(starwarsObj))

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}
