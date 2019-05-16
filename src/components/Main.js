import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getPhotosRequest} from '../reducers/PhotoReducer'
import styled from 'styled-components'

const AppContainer = styled.div``
class Main extends Component {
  render () {
    const { getPhotosRequest } = this.props
    return (
      <AppContainer>
        hola wacho
        <button onClick={getPhotosRequest}>Coso</button>
      </AppContainer>
    )
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      getPhotosRequest
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
