import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import createStore from './redux'
import Main from './components/Main'
import './styles/App.css'

const setup = createStore()

class App extends Component {
  render () {
    return (
      // <Provider store={setup.store}>
      <div>
        <Main />
      </div>
      // </Provider>
    )
  }
}

export default hot(App);
