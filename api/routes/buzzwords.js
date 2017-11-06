const buzzwordsObj = require('buzzwords')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createBuzzword = k => ({
  id: uuid.v4(),
  value: prop(k, buzzwordsObj)
})

const buzzwords = map(createBuzzword, keys(buzzwordsObj))

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })
}
