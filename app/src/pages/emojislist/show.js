import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'

import {
  getEmojislist,
  removeEmojislist
} from '../../action-creators/emojislist'

class ShowEmojislist extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getEmojislist(id)
  }

  render() {
    const props = this.props

    if (props.currentEmojislist.id !== props.match.params.id) {
      return <h1>Loading Emojis...</h1>
    }

    return (
      <div
        className="vh-100"
        style={{ backgroundColor: props.currentEmojislist.value }}
      >
        <h1>{props.currentEmojislist.value}</h1>
        <Link to={`/emojislist/${props.currentEmojislist.id}/edit`}>Edit</Link>
        <button
          onClick={e =>
            props.removeEmojislist(props.currentEmojislist.id, props.history)}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentEmojislist: state.currentEmojislist }
}

const mapActionsToProps = dispatch => {
  return {
    getEmojislist: id => dispatch(getEmojislist(id)),
    removeEmojislist: (id, history) => {
      if (window.confirm('Are you sure?')) {
        dispatch(removeEmojislist(id, history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowEmojislist)
