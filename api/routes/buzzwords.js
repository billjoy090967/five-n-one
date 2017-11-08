const buzzwordsObj = require('buzzwords')
const { map, keys, prop, isNil, append } = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

const createBuzzword = k => ({
  id: uuid.v4(),
  value: prop(k, buzzwordsObj)
})

let buzzwords = map(createBuzzword, keys(buzzwordsObj))

module.exports = app => {
  app.use(bodyParser.json())
  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })

  app.post('/buzzwords/new', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message: 'Must have a json document {id, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    buzzwords = append(req.body, buzzwords)
    res.send({ ok: true })
  })
}
