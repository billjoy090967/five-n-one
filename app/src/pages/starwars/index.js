import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = starwars => {
  return (
    <li key={starwars.id} style={{ starwars: starwars.value }}>
      <Link to={`/starwars/${starwars.id}`}>{starwars.value}</Link>
    </li>
  )
}

const Starwars = props => {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <Link to="/starwars/new">Add New Star Wars Character</Link>
      <ul>{map(li, props.starwars)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { starwars: state.starwars }
}

const connector = connect(mapStateToProps)

export default connector(Starwars)
