import { combineEpics } from 'redux-observable'
import { fetchSearchPhotos } from './SearchEpic'

export const rootEpic = combineEpics(fetchSearchPhotos);