const emojislistObj = require('emojis-list')
const { map, keys, prop, isNil, append } = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

const createEmojilist = k => ({
  id: uuid.v4(),
  value: prop(k, emojislistObj)
})

let emojislist = map(createEmojilist, keys(emojislistObj))

module.exports = app => {
  app.use(bodyParser.json())
  app.get('/emojislist', (req, res) => {
    res.send(emojislist)
  })

  app.post('/emojislist/new', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message: 'Must have a json document {id, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    emojislist = append(req.body, emojislist)
    res.send({ ok: true })
  })
}
