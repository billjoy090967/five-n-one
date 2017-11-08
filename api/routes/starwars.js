const starwarsObj = require('starwars-names')
const { map, keys, prop, isNil, append } = require('ramda')
const uuid = require('uuid')
const single = starwarsObj.all
const bodyParser = require('body-parser')

const createstarwars = k => ({
  id: uuid.v4(),
  value: prop(k, single)
})

let starwars = map(createstarwars, keys(single))

module.exports = app => {
  app.use(bodyParser.json())
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })

  app.post('/starwars/new', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message: 'Must have a json document {id, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    starwars = append(req.body, starwars)
    res.send({ ok: true })
  })
}
