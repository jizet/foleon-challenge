import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'

export default () => {
  const rootReducer = combineReducers({
  })

  return configureStore(rootReducer, rootSaga)
}