import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = data => {
  return <li key={data.id}>{data.value}</li>
}
const Buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <Link to="/buzzwords/new">Add New Buzzword</Link>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { buzzwords: state.buzzwords }
}

const connector = connect(mapStateToProps)

export default connector(Buzzwords)
