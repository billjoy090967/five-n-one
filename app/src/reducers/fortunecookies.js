import { SET_FORTUNECOOKIES } from '../constants'
import { CHG_CURRENT_FORTUNECOOKIES } from '../constants'
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
    case CHG_CURRENT_FORTUNECOOKIES:
      return merge(state, action.payload)
    default:
      return state
  }
}
