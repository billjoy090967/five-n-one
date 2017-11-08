import fetch from 'isomorphic-fetch'
import { SET_STARWARS } from '../constants'
import { CHG_CURRENT_STARWARS } from '../constants'
const url = 'http://localhost:5000/starwars'

export const setStarwars = async (dispatch, getState) => {
  const starwars = await fetch(url).then(res => res.json())
  dispatch({ type: SET_STARWARS, payload: starwars })
}
export const addStarwars = (starwars, history) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(starwars)

  const result = await fetch(url + '/new', {
    headers,
    method,
    body
  }).then(res => res.json())
  if (result.ok) {
    dispatch(setStarwars)
    history.push('/starwars')
  } else {
    // handle error
  }
}

export const chgStarwars = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_STARWARS, payload: { [field]: value } })
}
