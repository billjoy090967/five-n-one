import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = data => {
  return <li key={data.id}>{data.value}</li>
}
const Emojislist = props => {
  return (
    <div>
      <h1>Emojis List</h1>
      <Link to="/emojislist/new">Add New Emoji</Link>
      <ul>{map(li, props.emojislist)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { emojislist: state.emojislist }
}

const connector = connect(mapStateToProps)

export default connector(Emojislist)

// .... component function
