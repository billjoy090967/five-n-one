import { SET_EMOJISLIST } from '../constants'
import { CHG_CURRENT_EMOJISLIST } from '../constants'
import { merge } from 'ramda'

export const emojislist = (state = [], action) => {
  switch (action.type) {
    case SET_EMOJISLIST:
      return action.payload
    default:
      return state
  }
}

export const currentEmojislist = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_EMOJISLIST:
      return merge(state, action.payload)
    default:
      return state
  }
}
