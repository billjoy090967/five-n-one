import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = fortunecookies => {
  return <li key={fortunecookies.id}>{fortunecookies.value}</li>
}

function Fortunecookies(props, context) {
  const instance = new React.Component(props, context)
  instance.state = {
    fortunecookies: []
  }

  fetch('http://localhost:5000/fortunecookies')
    .then(res => res.json())
    .then(fortunecookies => instance.setState({ fortunecookies }))

  instance.render = function() {
    return (
      <div>
        <h1>Fortune Cookie Sayings</h1>
        <ul>{map(li, this.state.fortunecookies)}</ul>
      </div>
    )
  }
  return instance
}

export default Fortunecookies
