import fetch from 'isomorphic-fetch'
import { SET_FORTUNECOOKIES } from '../constants'
const url = 'http://localhost:5000/fortunecookies'

export const setFortunecookies = async (dispatch, getState) => {
  const fortunecookies = await fetch(url).then(res => res.json())
  dispatch({ type: SET_FORTUNECOOKIES, payload: fortunecookies })
}
