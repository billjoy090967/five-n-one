import fetch from 'isomorphic-fetch'
import { SET_COLORS, SET_CURRENT_COLOR, CHG_CURRENT_COLOR } from '../constants'
const url = 'http://localhost:5000/colors'

export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url).then(res => res.json())
  dispatch({ type: SET_COLORS, payload: colors })
}

export const addColor = (color, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(color)

  const result = await fetch(url + '/new', {
    headers,
    method,
    body
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setColors)
    history.push('/colors')
  } else {
  }
}

export const chgColor = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_COLOR, payload: { [field]: value } })
}

export const getColor = id => async (dispatch, getState) => {
  const color = await fetch(url + '/' + id).then(res => res.json())
  dispatch({ type: SET_CURRENT_COLOR, payload: color })
}

export const removeColor = (id, history) => async (dispatch, getState) => {
  const results = await fetch(url + '/' + id, {
    method: 'DELETE'
  }).then(res => res.json())

  if (results.ok) {
    dispatch(setColors)
    history.push('/colors')
  } else {
  }
}

export const updateColor = (color, history) => async (dispatch, getState) => {
  const result = await fetch(url + '/' + color.id, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(color)
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setColors)
    history.push('/colors/' + color.id)
  }
}
