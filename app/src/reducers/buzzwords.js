import { SET_BUZZWORDS, SET_CURRENT_BUZZWORD } from '../constants'
import { CHG_CURRENT_BUZZWORD } from '../constants'
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
    case CHG_CURRENT_BUZZWORD:
      return merge(state, action.payload)
    default:
      return state
    case SET_CURRENT_BUZZWORD:
      return action.payload
  }
}
