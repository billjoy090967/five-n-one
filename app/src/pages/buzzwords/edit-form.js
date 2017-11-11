import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  getBuzzword,
  chgBuzzword,
  updateBuzzword
} from '../../action-creators/buzzwords'
import { omit } from 'ramda'

class EditBuzzwordForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getBuzzword(id)
  }
  render() {
    const props = omit(['onSubmit'], this.props)
    return (
      <div>
        <h1>Edit Buzzword</h1>
        <Form
          name={props.currentBuzzword.name}
          value={props.currentBuzzword.value}
          id={props.currentBuzzword.id}
          cancelUrl={`/buzzwords/${props.currentBuzzword.id}`}
          onSubmit={buzzword => this.props.onSubmit(buzzword, props.history)}
          onChange={props.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentBuzzword: state.currentBuzzword
})

const mapActionsToProps = dispatch => {
  return {
    getBuzzword: id => dispatch(getBuzzword(id)),
    onChange: (field, value) => dispatch(chgBuzzword(field, value)),
    onSubmit: (buzzword, history) => e => {
      e.preventDefault()
      dispatch(updateBuzzword(buzzword, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditBuzzwordForm)
