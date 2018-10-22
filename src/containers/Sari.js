import React from 'react'
import { connect } from 'react-redux'
import { fetchLists } from '../actions'

let Sari = () => (
  <button
    onClick={() => { getPosts(channel) }}
    className="btn btn-primary btn-lg btn-block" >
    Get sari
  </button>
);

const mapStateToProps = (state) => ({
  channel: state.channel
})

const mapDispatchToProps = {
  getPosts: fetchLists
}

Sari= connect(
  mapStateToProps,
  mapDispatchToProps
  Sari)

export default Sari;
