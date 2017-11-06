import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

function Colors(props, context) {
  const instance = new React.Component(props, context)
  instance.state = {
    colors: []
  }

  fetch('http://localhost:5000/colors')
    .then(res => res.json())
    .then(colors => instance.setState({ colors }))

  instance.render = function() {
    return (
      <div>
        <h1>Colors</h1>
        <ul>{map(li, this.state.colors)}</ul>
      </div>
    )
  }
  return instance
}

export default Colors
