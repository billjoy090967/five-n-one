import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      <Link to={`/colors/${color.id}`}>{color.name}</Link>
    </li>
  )
}

const Colors = props => {
  return (
    <div class="pa3 pa5-ns">
      <ul class="list pl0 measure left">
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 avenir">
          <h1>Colors</h1>
          <h2>
            <Link to="/colors/new">Add New Color</Link>
          </h2>
          {map(li, props.colors)}
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { colors: state.colors }
}

const connector = connect(mapStateToProps)

export default connector(Colors)
