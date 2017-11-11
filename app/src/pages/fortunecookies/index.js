import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = fortunecookie => {
  return (
    <li key={fortunecookie.id}>
      <Link to={`/fortunecookies/${fortunecookie.id}`}>
        {fortunecookie.value}
      </Link>
    </li>
  )
}

const Fortunecookies = props => {
  return (
    <div>
      <h1>Fortune Cookie Fortunes</h1>
      <Link to="/fortunecookies/new">Add New Fortune</Link>
      <ul>{map(li, props.fortunecookies)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { fortunecookies: state.fortunecookies }
}

const connector = connect(mapStateToProps)

export default connector(Fortunecookies)
