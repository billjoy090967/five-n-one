import { SET_FORTUNECOOKIES, SET_CURRENT_FORTUNECOOKIE } from '../constants'
import { CHG_CURRENT_FORTUNECOOKIE } from '../constants'
import { merge } from 'ramda'

export const fortunecookies = (state = [], action) => {
  switch (action.type) {
    case SET_FORTUNECOOKIES:
      return action.payload
    default:
      return state
  }
}

export const currentFortunecookie = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_FORTUNECOOKIE:
      return merge(state, action.payload)
    default:
      return state
    case SET_CURRENT_FORTUNECOOKIE:
      return action.payload
  }
}
