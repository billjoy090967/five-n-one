const starwarsObj = require('starwars-names')
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

const createStarwars = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, starwarsObj.all)
})

let starwars = map(createStarwars, keys(starwarsObj.all))

module.exports = app => {
  app.use(bodyParser.json())

  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })

  app.get('/starwars/:id', (req, res) => {
    res.send(find(propEq('id', req.params.id))(starwars))
  })

  app.put('/starwars/:id', bodyParser.json(), (req, res) => {
    if (!req.body) {
      return res.status(500).send({
        ok: false,
        message: 'Star Wars Character Object required'
      })
    }
    starwars = map(
      starwars => (propEq('id', req.params.id, starwars) ? req.body : starwars),
      starwars
    )
    res.send({ ok: true })
  })

  app.post('/starwars/new', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          'Must have a json document {id, name, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    starwars = append(req.body, starwars)
    res.send({ ok: true })
  })
  app.delete('/starwars/:id', (req, res) => {
    starwars = reject(compose(equals(req.params.id), prop('id')), starwars)
    res.send({ ok: true })
  })
}
