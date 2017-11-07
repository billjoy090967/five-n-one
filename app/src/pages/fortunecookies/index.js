import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = fortunecookies => {
  return <li key={fortunecookies.id}>{fortunecookies.value}</li>
}
const Fortunecookies = props => {
  return (
    <div>
      <h1>Fortune Cookie Sayings</h1>
      <ul>{map(li, props.fortunecookies)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { fortunecookies: state.fortunecookies }
}

const connector = connect(mapStateToProps)

export default connector(Fortunecookies)
