const emojislistObj = require('emojis-list')
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

const createEmojislist = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, emojislistObj)
})

let emojislist = map(createEmojislist, keys(emojislistObj))

module.exports = app => {
  app.use(bodyParser.json())

  app.get('/emojislist', (req, res) => {
    res.send(emojislist)
  })

  app.get('/emojislist/:id', (req, res) => {
    res.send(find(propEq('id', req.params.id))(emojislist))
  })

  app.put('/emojislist/:id', bodyParser.json(), (req, res) => {
    if (!req.body) {
      return res.status(500).send({
        ok: false,
        message: 'Emoji Object required'
      })
    }
    emojislist = map(
      emojislist =>
        propEq('id', req.params.id, emojislist) ? req.body : emojislist,
      emojislist
    )
    res.send({ ok: true })
  })

  app.post('/emojislist/new', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          'Must have a json document {id, name, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    emojislist = append(req.body, emojislist)
    res.send({ ok: true })
  })
  app.delete('/emojislist/:id', (req, res) => {
    emojislist = reject(compose(equals(req.params.id), prop('id')), emojislist)
    res.send({ ok: true })
  })
}
