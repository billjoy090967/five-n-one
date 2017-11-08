import fetch from 'isomorphic-fetch'
import { SET_FORTUNECOOKIES } from '../constants'
import { CHG_CURRENT_FORTUNECOOKIES } from '../constants'
const url = 'http://localhost:5000/fortunecookies'

export const setFortunecookies = async (dispatch, getState) => {
  const fortunecookies = await fetch(url).then(res => res.json())
  dispatch({ type: SET_FORTUNECOOKIES, payload: fortunecookies })
}

export const addFortunecookies = (fortunecookie, history) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(fortunecookie)

  const result = await fetch(url + '/new', {
    headers,
    method,
    body
  }).then(res => res.json())
  if (result.ok) {
    dispatch(setFortunecookies)
    history.push('/fortunecookies')
  } else {
    // handle error
  }
}

export const chgFortunecookies = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_FORTUNECOOKIES, payload: { [field]: value } })
}
