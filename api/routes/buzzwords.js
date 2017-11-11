const buzzwordsObj = require('buzzwords')
const {
  map,
  keys,
  prop,
  isNil,
  append,
  find,
  propEq,
  reject,
  compose,
  equals
} = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

const createBuzzword = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, buzzwordsObj)
})

let buzzwords = map(createBuzzword, keys(buzzwordsObj))

module.exports = app => {
  app.use(bodyParser.json())

  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })

  app.get('/buzzwords/:id', (req, res) => {
    res.send(find(propEq('id', req.params.id))(buzzwords))
  })

  app.put('/buzzwords/:id', bodyParser.json(), (req, res) => {
    if (!req.body) {
      return res.status(500).send({
        ok: false,
        message: 'Buzzword Object required'
      })
    }
    buzzwords = map(
      buzzword => (propEq('id', req.params.id, buzzword) ? req.body : buzzword),
      buzzwords
    )
    res.send({ ok: true })
  })

  app.post('/buzzwords/new', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          'Must have a json document {id, name, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    buzzwords = append(req.body, buzzwords)
    res.send({ ok: true })
  })
  app.delete('/buzzwords/:id', (req, res) => {
    buzzwords = reject(compose(equals(req.params.id), prop('id')), buzzwords)
    res.send({ ok: true })
  })
}
