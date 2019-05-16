import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import createStore from './reducers'
import Main from './components/Main'
import './styles/App.css'

const setup = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={setup.store}>
        <Main />
      </Provider>
    )
  }
}

export default hot(App);
