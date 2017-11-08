import fetch from 'isomorphic-fetch'
import { SET_EMOJISLIST } from '../constants'
import { CHG_CURRENT_EMOJISLIST } from '../constants'
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
  console.log('body, emojislist', body)
  const result = await fetch(url + '/new', {
    headers,
    method,
    body
  }).then(res => res.json())
  if (result.ok) {
    dispatch(setEmojislist)
    history.push('/emojislist')
  } else {
    // handle error
  }
}

export const chgEmojislist = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_EMOJISLIST, payload: { [field]: value } })
}
