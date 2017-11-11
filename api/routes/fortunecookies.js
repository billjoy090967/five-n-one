const fortunecookiesObj = require('fortune-cookie')
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

const createFortunecookie = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, fortunecookiesObj)
})

let fortunecookies = map(createFortunecookie, keys(fortunecookiesObj))

module.exports = app => {
  app.use(bodyParser.json())

  app.get('/fortunecookies', (req, res) => {
    res.send(fortunecookies)
  })

  app.get('/fortunecookies/:id', (req, res) => {
    res.send(find(propEq('id', req.params.id))(fortunecookies))
  })

  app.put('/fortunecookies/:id', bodyParser.json(), (req, res) => {
    if (!req.body) {
      return res.status(500).send({
        ok: false,
        message: 'Fortune Cookie Object required'
      })
    }
    fortunecookies = map(
      fortunecookie =>
        propEq('id', req.params.id, fortunecookie) ? req.body : fortunecookie,
      fortunecookies
    )
    res.send({ ok: true })
  })

  app.post('/fortunecookies/new', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          'Must have a json document {id, name, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    fortunecookies = append(req.body, fortunecookies)
    res.send({ ok: true })
  })
  app.delete('/fortunecookies/:id', (req, res) => {
    fortunecookies = reject(
      compose(equals(req.params.id), prop('id')),
      fortunecookies
    )
    res.send({ ok: true })
  })
}
