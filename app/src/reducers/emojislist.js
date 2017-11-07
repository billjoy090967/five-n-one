import { SET_EMOJISLIST } from '../constants'

export const emojislist = (state = [], action) => {
  switch (action.type) {
    case SET_EMOJISLIST:
      return action.payload
    default:
      return state
  }
}
