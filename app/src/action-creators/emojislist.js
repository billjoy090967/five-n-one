import fetch from 'isomorphic-fetch'
import {
  SET_EMOJISLIST,
  SET_CURRENT_EMOJISLIST,
  CHG_CURRENT_EMOJISLIST
} from '../constants'
const url = 'http://localhost:5000/emojislist'

export const setEmojislist = async (dispatch, getState) => {
  const emojislist = await fetch(url).then(res => res.json())
  dispatch({ type: SET_EMOJISLIST, payload: emojislist })
}

export const addEmojislist = (emojislist, history) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(emojislist)

  const result = await fetch(url + '/new', {
    headers,
    method,
    body
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setEmojislist)
    history.push('/emojislist')
  } else {
  }
}

export const chgEmojislist = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_EMOJISLIST, payload: { [field]: value } })
}

export const getEmojislist = id => async (dispatch, getState) => {
  const emojislist = await fetch(url + '/' + id).then(res => res.json())
  dispatch({ type: SET_CURRENT_EMOJISLIST, payload: emojislist })
}

export const removeEmojislist = (id, history) => async (dispatch, getState) => {
  const results = await fetch(url + '/' + id, {
    method: 'DELETE'
  }).then(res => res.json())

  if (results.ok) {
    dispatch(setEmojislist)
    history.push('/emojislist')
  } else {
  }
}

export const updateEmojislist = (emojislist, history) => async (
  dispatch,
  getState
) => {
  const result = await fetch(url + '/' + emojislist.id, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(emojislist)
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setEmojislist)
    history.push('/emojislist/' + emojislist.id)
  }
}
