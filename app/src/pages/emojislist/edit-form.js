import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  getEmojislist,
  chgEmojislist,
  updateEmojislist
} from '../../action-creators/emojislist'
import { omit } from 'ramda'

class EditEmojislistForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getEmojislist(id)
  }
  render() {
    const props = omit(['onSubmit'], this.props)
    return (
      <div>
        <h1>Edit Emojis List</h1>
        <Form
          name={props.currentEmojislist.name}
          value={props.currentEmojislist.value}
          id={props.currentEmojislist.id}
          cancelUrl={`/emojislist/${props.currentEmojislist.id}`}
          onSubmit={emojislist =>
            this.props.onSubmit(emojislist, props.history)}
          onChange={props.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentEmojislist: state.currentEmojislist
})

const mapActionsToProps = dispatch => {
  return {
    getEmojislist: id => dispatch(getEmojislist(id)),
    onChange: (field, value) => dispatch(chgEmojislist(field, value)),
    onSubmit: (emojislist, history) => e => {
      e.preventDefault()
      dispatch(updateEmojislist(emojislist, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditEmojislistForm)
