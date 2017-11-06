const fortunecookiesObj = require('fortune-cookie')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createFortunecookie = k => ({
  id: uuid.v4(),
  value: prop(k, fortunecookiesObj)
})

const fortunecookies = map(createFortunecookie, keys(fortunecookiesObj))

module.exports = app => {
  app.get('/fortunecookies', (req, res) => {
    res.send(fortunecookies)
  })
}
