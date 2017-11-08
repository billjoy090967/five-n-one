const fortunecookiesObj = require('fortune-cookie')
const { map, keys, prop, isNil, append } = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

const createFortunecookie = k => ({
  id: uuid.v4(),
  value: prop(k, fortunecookiesObj)
})

let fortunecookies = map(createFortunecookie, keys(fortunecookiesObj))

module.exports = app => {
  app.use(bodyParser.json())
  app.get('/fortunecookies', (req, res) => {
    res.send(fortunecookies)
  })

  app.post('/fortunecookies/new', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message: 'Must have a json document {id, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    fortunecookies = append(req.body, fortunecookies)
    res.send({ ok: true })
  })
}
