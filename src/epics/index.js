import { combineEpics } from 'redux-observable'
import { fetchSearchPhotos } from './searchEpic'

export const rootEpic = combineEpics(fetchSearchPhotos);