import { SET_BUZZWORDS } from '../constants'
import { CHG_CURRENT_BUZZWORDS } from '../constants'
import { merge } from 'ramda'

export const buzzwords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZWORDS:
      return action.payload
    default:
      return state
  }
}

export const currentBuzzword = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_BUZZWORDS:
      return merge(state, action.payload)
    default:
      return state
  }
}
