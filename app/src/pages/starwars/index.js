import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = data => {
  return <li key={data.id}>{data.value}</li>
}
const Starwars = props => {
  return (
    <div>
      <h1>Starwars Characters</h1>
      <Link to="/starwars/new">Add New Star Wars Characters</Link>
      <ul>{map(li, props.starwars)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { starwars: state.starwars }
}

const connector = connect(mapStateToProps)

export default connector(Starwars)
