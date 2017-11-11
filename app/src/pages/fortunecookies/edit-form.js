import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  getFortunecookie,
  chgFortunecookies,
  updateFortunecookie
} from '../../action-creators/fortunecookies'
import { omit } from 'ramda'

class EditFortunecookieForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getFortunecookie(id)
  }
  render() {
    const props = omit(['onSubmit'], this.props)
    return (
      <div>
        <h1>Edit Fortunecookie</h1>
        <Form
          name={props.currentFortunecookie.name}
          value={props.currentFortunecookie.value}
          id={props.currentFortunecookie.id}
          cancelUrl={`/fortunecookies/${props.currentFortunecookie.id}`}
          onSubmit={fortunecookie =>
            this.props.onSubmit(fortunecookie, props.history)}
          onChange={props.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentFortunecookie: state.currentFortunecookie
})

const mapActionsToProps = dispatch => {
  return {
    getFortunecookie: id => dispatch(getFortunecookie(id)),
    onChange: (field, value) => dispatch(chgFortunecookies(field, value)),
    onSubmit: (fortunecookie, history) => e => {
      e.preventDefault()
      dispatch(updateFortunecookie(fortunecookie, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditFortunecookieForm)
