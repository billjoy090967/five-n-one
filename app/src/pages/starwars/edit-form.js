import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  getStarwars,
  chgStarwars,
  updateStarwars
} from '../../action-creators/starwars'
import { omit } from 'ramda'

class EditStarwarsForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getStarwars(id)
  }
  render() {
    const props = omit(['onSubmit'], this.props)
    return (
      <div>
        <h1>Edit Star Wars Character</h1>
        <Form
          name={props.currentStarwars.name}
          value={props.currentStarwars.value}
          id={props.currentStarwars.id}
          cancelUrl={`/starwars/${props.currentStarwars.id}`}
          onSubmit={starwars => this.props.onSubmit(starwars, props.history)}
          onChange={props.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentStarwars: state.currentStarwars
})

const mapActionsToProps = dispatch => {
  return {
    getStarwars: id => dispatch(getStarwars(id)),
    onChange: (field, value) => dispatch(chgStarwars(field, value)),
    onSubmit: (starwars, history) => e => {
      e.preventDefault()
      dispatch(updateStarwars(starwars, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditStarwarsForm)
