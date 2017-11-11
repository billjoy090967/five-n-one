import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'

import { getStarwars, removeStarwars } from '../../action-creators/starwars'

class ShowStarwars extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getStarwars(id)
  }

  render() {
    const props = this.props

    if (props.currentStarwars.id !== props.match.params.id) {
      return <h1>Loading Star Wars Characters...</h1>
    }

    return (
      <div
        className="vh-100"
        style={{ backgroundColor: props.currentStarwars.value }}
      >
        <h1>{props.currentStarwars.value}</h1>
        <Link to={`/starwars/${props.currentStarwars.id}/edit`}>Edit</Link>
        <button
          onClick={e =>
            props.removeStarwars(props.currentStarwars.id, props.history)}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentStarwars: state.currentStarwars }
}

const mapActionsToProps = dispatch => {
  return {
    getStarwars: id => dispatch(getStarwars(id)),
    removeStarwars: (id, history) => {
      if (window.confirm('Are you sure?')) {
        dispatch(removeStarwars(id, history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowStarwars)
