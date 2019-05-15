import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/Api'

/* ------------- Types ------------- */


/* ------------- Sagas ------------- */


/* ------------- API ------------- */
const api = API.create()

export default function * root () {
  yield all([
  ])
}