import fetch from 'isomorphic-fetch'
import { SET_EMOJISLIST } from '../constants'
const url = 'http://localhost:5000/emojislist'

export const setEmojislist = async (dispatch, getState) => {
  const emojislist = await fetch(url).then(res => res.json())
  dispatch({ type: SET_EMOJISLIST, payload: emojislist })
}
