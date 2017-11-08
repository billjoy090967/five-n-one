import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addEmojislist, chgEmojislist } from '../../action-creators/emojislist'

const EmojislistForm = props => {
  return (
    <div>
      <h1>Add New Emoji</h1>
      <Form
        {...props.currentEmojislist}
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        cancelUrl="/emojislist"
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentEmojislist: state.currentEmojislist
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgEmojislist(field, value))
    },
    onSubmit: history => emojislist => e => {
      e.preventDefault()
      console.log('addEmojilist', emojislist)
      dispatch(addEmojislist(emojislist, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EmojislistForm)
