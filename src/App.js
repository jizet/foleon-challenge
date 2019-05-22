import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import createStore from './redux'
import styled from 'styled-components'
import Main from './containers/Main'
import { Header } from './containers/Header'
import './styles/App.css'

const setup = createStore()

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`

class App extends Component {
  render () {
    return (
      <Provider store={setup.store}>
        <Container>
          <Header />
          <Main />
        </Container>
      </Provider>
    )
  }
}

export default hot(App);
