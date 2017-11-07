import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = emojislist => {
  return <li key={emojislist.id}>{emojislist.value}</li>
}
const Emojislist = props => {
  return (
    <div>
      <h1>Emojis List</h1>
      <ul>{map(li, props.emojislist)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { emojislist: state.emojislist }
}

const connector = connect(mapStateToProps)

export default connector(Emojislist)
