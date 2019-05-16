import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { photosSearchRequest } from '../actions/PhotosActions'
import styled from 'styled-components'

const AppContainer = styled.div``
class Main extends Component {
  render () {
    const { photosSearchRequest } = this.props
    return (
      <AppContainer>
        hola wacho
        <button onClick={photosSearchRequest}>Coso</button>
      </AppContainer>
    )
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      photosSearchRequest
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
