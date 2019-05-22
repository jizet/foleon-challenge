import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import {rootEpic} from '../epics'
import {reducer as photoReducer} from './PhotoReducer'

export default () => {
  const rootReducer = combineReducers({
    photos: photoReducer
  })
  
  return configureStore(rootReducer, rootEpic)
}