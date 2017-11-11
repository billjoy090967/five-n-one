import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'

import {
  getFortunecookie,
  removeFortunecookie
} from '../../action-creators/fortunecookies'

class ShowFortunecookie extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getFortunecookie(id)
  }

  render() {
    const props = this.props

    if (props.currentFortunecookie.id !== props.match.params.id) {
      return <h1>Loading Fortunes...</h1>
    }

    return (
      <div
        className="vh-100"
        style={{ backgroundColor: props.currentFortunecookie.value }}
      >
        <h1>{props.currentFortunecookie.value}</h1>
        <Link to={`/fortunecookies/${props.currentFortunecookie.id}/edit`}>
          Edit
        </Link>
        <button
          onClick={e =>
            props.removeFortunecookie(
              props.currentFortunecookie.id,
              props.history
            )}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentFortunecookie: state.currentFortunecookie }
}

const mapActionsToProps = dispatch => {
  return {
    getFortunecookie: id => dispatch(getFortunecookie(id)),
    removeFortunecookie: (id, history) => {
      if (window.confirm('Are you sure?')) {
        dispatch(removeFortunecookie(id, history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowFortunecookie)
