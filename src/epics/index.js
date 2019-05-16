import { combineEpics } from 'redux-observable'
import { fetchSearchPhotos } from './searchEpic'

export default rootEpic = combineEpics(fetchSearchPhotos);