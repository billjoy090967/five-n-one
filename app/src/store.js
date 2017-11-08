import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'
import { starwars, currentStarwars } from './reducers/starwars'
import { fortunecookies, currentFortunecookie } from './reducers/fortunecookies'
import { emojislist, currentEmojislist } from './reducers/emojislist'
import { colors, currentColor } from './reducers/colors'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    currentBuzzword,
    starwars,
    currentStarwars,
    fortunecookies,
    currentFortunecookie,
    emojislist,
    currentEmojislist
  }),
  applyMiddleware(thunk)
)
