import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'
import { post, get } from '../../utils/request'
import * as Actions from './actions'
import { API_HOST } from '../utils'

/**
 * Get transactions info saga function which used redux-saga effects.
 *
 * @returns {Function}
 *
 */
export function * getTRInfo () {
  try {
    const res = yield call(get, `${API_HOST}/dashboard/transactions`)
    yield put(Actions.getTRInfoSuccess(res))
  } catch (error) {
    yield put(Actions.getTRInfoError(error))
  }
}

/**
 * Get transactions info saga function which used redux-saga effects.
 *
 * @returns {Function}
 *
 */
export function * getTRStatis () {
  try {
    const res = yield call(get, `${API_HOST}/transactions/statistics`)
    yield put(Actions.getTRStatisSuccess(res))
  } catch (error) {
    yield put(Actions.getTRStatisError(error))
  }
}

/**
 * Get transactions list saga function which used redux-saga effects.
 *
 * @returns {Function}
 *
 */
export function * getTRList ({ payload }) {
  try {
    const res = yield call(post, `${API_HOST}/transactions`, payload)
    yield put(Actions.getTRListSuccess(res))
  } catch (error) {
    yield put(Actions.getTRListError(error))
  }
}

/**
 * Get a transaction details saga function which used redux-saga effects.
 *
 * @param {Object} payload // which includes transaction ID.
 * @returns {Function}
 *
 */
export function * getTRDetails ({ payload }) {
  try {
    const res = yield call(get, `${API_HOST}/transactions/${payload}`)
    yield put(Actions.getTRDetailsSuccess(res))
  } catch (error) {
    yield put(Actions.getTRDetailsError(error))
  }
}

/**
 * Get a user's transaction details saga function which used redux-saga effects.
 *
 * @param {Object} payload // which includes user ID.
 * @returns {Function}
 *
 */
export function * getUserTR ({ payload }) {
  const { id, params } = payload

  try {
    const res = yield call(get, `${API_HOST}/users/${id}/transactions`, params)
    yield put(Actions.getUserTRSuccess(res))
  } catch (error) {
    yield put(Actions.getUserTRError(error))
  }
}

/**
 * Export saga functions which used takeEvery of redux-saga effects.
 */
export default function * sagas () {
  yield takeEvery(Actions.GET_TR_INFO, getTRInfo)
  yield takeEvery(Actions.GET_TR_STATIS, getTRStatis)
  yield takeEvery(Actions.GET_TR_LIST, getTRList)
  yield takeEvery(Actions.GET_TR_DETAILS, getTRDetails)
  yield takeEvery(Actions.GET_USER_TR, getUserTR)
}
