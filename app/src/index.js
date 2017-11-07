import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import { setColors } from './action-creators/colors'
import { setBuzzwords } from './action-creators/buzzwords'
import { setStarwars } from './action-creators/starwars'
import { setFortunecookies } from './action-creators/fortunecookies'
import { setEmojislist } from './action-creators/emojislist'

import 'tachyons'
import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(setColors)
store.dispatch(setBuzzwords)
store.dispatch(setStarwars)
store.dispatch(setFortunecookies)
store.dispatch(setEmojislist)
