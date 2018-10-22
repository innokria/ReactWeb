import React from 'react'
import { connect } from 'react-redux'
import { fetchLists } from '../actions'

let Button = ({ getPosts, channel }) => (
  <button
    onClick={() => { getPosts(channel) }}
    className="btn btn-primary btn-lg btn-block" >
    Load Data
  </button>

);

const mapStateToProps = (state) => ({
  channel: state.channel
})

const mapDispatchToProps = {
  getPosts: fetchLists
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
