import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addStarwars, chgStarwars } from '../../action-creators/starwars'

const StarwarsForm = props => {
  return (
    <div>
      <h1>Add New Star Wars Character</h1>
      <Form
        {...props.currentStarwars}
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        cancelUrl="/starwars"
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentStarwars: state.currentStarwars
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgStarwars(field, value))
    },
    onSubmit: history => starwars => e => {
      e.preventDefault()
      dispatch(addStarwars(starwars, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(StarwarsForm)
