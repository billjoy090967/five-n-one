import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  addFortunecookies,
  chgFortunecookies
} from '../../action-creators/fortunecookies'

const FortunecookiesForm = props => {
  return (
    <div>
      <h1>Add New Fortune</h1>
      <Form
        {...props.currentFortunecookie}
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        cancelUrl="/fortunecookies"
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentFortunecookie: state.currentFortunecookie
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgFortunecookies(field, value))
    },
    onSubmit: history => fortunecookie => e => {
      e.preventDefault()
      dispatch(addFortunecookies(fortunecookie, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(FortunecookiesForm)
