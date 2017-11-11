import { SET_STARWARS, SET_CURRENT_STARWARS } from '../constants'
import { CHG_CURRENT_STARWARS } from '../constants'
import { merge } from 'ramda'

export const starwars = (state = [], action) => {
  switch (action.type) {
    case SET_STARWARS:
      return action.payload
    default:
      return state
  }
}

export const currentStarwars = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_STARWARS:
      return merge(state, action.payload)
    default:
      return state
    case SET_CURRENT_STARWARS:
      return action.payload
  }
}
