import "regenerator-runtime/runtime";
import { call, put } from 'redux-saga/effects'
import PhotosActions from '../redux/PhotosRedux'

export function * getPhotos (api, action) {
  const response = yield call(api.getmatches, action.tag)

  if (response.ok) {
    if (response.data.count > 1) {
      return yield put(PhotosActions.getPhotosSuccess(response.data.value))
    }
  }

  return yield put(PhotosActions.getPhotosFailure(response.data))
}