import fetch from 'isomorphic-fetch'
import {
  SET_FORTUNECOOKIES,
  SET_CURRENT_FORTUNECOOKIE,
  CHG_CURRENT_FORTUNECOOKIE
} from '../constants'
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
  }
}

export const chgFortunecookies = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_FORTUNECOOKIE, payload: { [field]: value } })
}

export const getFortunecookie = id => async (dispatch, getState) => {
  const fortunecookie = await fetch(url + '/' + id).then(res => res.json())
  dispatch({ type: SET_CURRENT_FORTUNECOOKIE, payload: fortunecookie })
}

export const removeFortunecookie = (id, history) => async (
  dispatch,
  getState
) => {
  const results = await fetch(url + '/' + id, {
    method: 'DELETE'
  }).then(res => res.json())

  if (results.ok) {
    dispatch(setFortunecookies)
    history.push('/fortunecookies')
  } else {
  }
}

export const updateFortunecookie = (fortunecookie, history) => async (
  dispatch,
  getState
) => {
  const result = await fetch(url + '/' + fortunecookie.id, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(fortunecookie)
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setFortunecookies)
    history.push('/fortunecookies/' + fortunecookie.id)
  }
}
