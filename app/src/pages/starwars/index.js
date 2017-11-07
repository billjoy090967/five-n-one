import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = starwars => {
  return <li key={starwars.id}>{starwars.value}</li>
}
const Starwars = props => {
  return (
    <div>
      <h1>Starwars Characters</h1>
      <ul>{map(li, props.starwars)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { starwars: state.starwars }
}

const connector = connect(mapStateToProps)

export default connector(Starwars)
