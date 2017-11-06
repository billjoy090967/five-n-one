const starwarsObj = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
const single = starwarsObj.all

const createstarwars = k => ({
  id: uuid.v4(),
  value: prop(k, single)
})

const starwars = map(createstarwars, keys(single))

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}
