import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getPhotosRequest: [],
  getPhotosSuccess: ['result'],
  getPhotosFailure: ['error'],
}, { prefix: 'PHOTOS_'})

export const PhotosTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  matches: [],
  fetching: false,
  error: false
}

/* ------------- Reducers ------------- */

export const getPhotosRequest = (state) => ({
  ...state, fetching: true, error: false
})

export const getPhotosSuccess = (state, {result}) => {
  return {...state, fetching: false, photos: result}
}

export const getPhotosFailure = (state, {error}) => ({
  ...state, fetching: false, error: error
})

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PHOTOS_SUCCESS]: getPhotosSuccess,
  [Types.GET_PHOTOS_FAILURE]: getPhotosFailure,
  [Types.GET_PHOTOS_REQUEST]: getPhotosRequest
})