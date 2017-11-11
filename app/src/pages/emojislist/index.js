import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = emojislist => {
  return (
    <li key={emojislist.id}>
      <Link to={`/emojislist/${emojislist.id}`}>{emojislist.value}</Link>
    </li>
  )
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
