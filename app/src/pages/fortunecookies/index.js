import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = fortunecookies => {
  return <li key={fortunecookies.id}>{fortunecookies.value}</li>
}
const Fortunecookies = props => {
  return (
    <div>
      <h1>Fortune Cookie Sayings</h1>
      <Link to="/fortunecookies/new">Add Fortune</Link>
      <ul>{map(li, props.fortunecookies)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { fortunecookies: state.fortunecookies }
}

const connector = connect(mapStateToProps)

export default connector(Fortunecookies)
