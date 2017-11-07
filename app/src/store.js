import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors } from './reducers/colors'
import { buzzwords } from './reducers/buzzwords'
import { starwars } from './reducers/starwars'
import { fortunecookies } from './reducers/fortunecookies'
import { emojislist } from './reducers/emojislist'

export default createStore(
  combineReducers({
    colors,
    buzzwords,
    starwars,
    fortunecookies,
    emojislist
  }),
  applyMiddleware(thunk)
)
