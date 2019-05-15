import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/Api'

/* ------------- Types ------------- */
import { PhotosTypes } from '../redux/PhotosRedux'

/* ------------- Sagas ------------- */

import { getPhotos } from './PhotosSagas'
/* ------------- API ------------- */
const api = API.create()

export default function * root () {
  yield all([
    takeLatest(PhotosTypes.GET_PHOTOS_REQUEST, getPhotos, api)
  ])
}