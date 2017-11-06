const emojislistObj = require('emojis-list')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
const createEmoji = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, emojislistObj)
})

const emojislist = map(createEmoji, keys(emojislistObj))

module.exports = app => {
  app.get('/emojislist', (req, res) => {
    res.send(emojislist)
  })
}
