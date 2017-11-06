import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = emojislist => {
  return (
    <li key={emojislist.id} style={{ emojislist: emojislist.value }}>
      {emojislist.value}
    </li>
  )
}

function Emojislist(props, context) {
  const instance = new React.Component(props, context)
  instance.state = {
    emojislist: []
  }

  fetch('http://localhost:5000/emojislist')
    .then(res => res.json())
    .then(emojislist => instance.setState({ emojislist }))

  instance.render = function() {
    return (
      <div>
        <h1>Emojis List</h1>
        <ul>{map(li, this.state.emojislist)}</ul>
      </div>
    )
  }
  return instance
}

export default Emojislist
