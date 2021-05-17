import { select } from 'redux-saga/effects'
import { notification } from '../components/common/Notification'

// JSON parse of response.
const parseJSON = response => response.json()

/**
 * The arrow function for get token from redux store.
 *
 * @param {*} state
 * @returns {*}
 *
 */
const getToken = state => state.getIn(['userReducer', 'token'])

/**
 * The function for check response status.
 *
 * @param {*} response
 * @returns {*} throw error.
 *
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  /**
   * Unauthorized response exception handle.
   */
  if (response.status === 401) {
    // remove local storage for re-authentication.
    window.localStorage.removeItem('dmToken')
    window.location.replace('/')
    notification('error', 'Your token has been expired!')

    return
  }

  throw new Error(response.statusText)
}

/**
 * The function get query param with encodeURLComponent.
 *
 * @param {*} params
 * @returns {*}
 *
 */
const queryParams = params =>
  Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')

/**
 * Default header define with JSON parse.
 */
const defaultHeaders = JSON.parse(
  JSON.stringify({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  })
)

/**
 * Delete header define with JSON parse.
 */
const deleteHeaders = JSON.parse(
  JSON.stringify({
    Accept: '*/*',
    'Content-Type': 'text/plain'
  })
)

/**
 * Suspend header define with JSON parse.
 */
const suspendHeaders = JSON.parse(
  JSON.stringify({ Accept: '*/*' })
)

/**
 * Generator function for request define.
 *
 * @param {String} path
 * @param {*} options
 * @returns {*}
 *
 */
function * request (path, options) {
  const url = path
  let token = yield select(getToken)

  if (token) {
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
    return yield fetch(url, { ...options, headers })
      .then(checkStatus)
      .then(parseJSON)
  }

  return yield fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}

/**
 * Generator function for get request.
 *
 * @param {String} path
 * @param {Object} params
 * @param {JSON} headers
 * @returns {*}
 *
 */
export function * get (path, params = null, headers = null) {
  let path2 = path
  if (params) {
    path2 += (path.indexOf('?') === -1 ? '?' : '&') + queryParams(params)
  }

  const options = {
    credentials: 'same-origin',
    method: 'GET',
    headers: { ...defaultHeaders, ...headers }
  }

  return yield request(path2, options)
}

/**
 * Generator function for post request.
 *
 * @param {String} path
 * @param {Object} params
 * @param {JSON} headers
 * @returns {*}
 *
 */
export const post = (path, params = null, headers = null) => {
  const options = {
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify(params),
    headers: { ...defaultHeaders, ...headers }
  }

  return request(path, options)
}

/**
 * Generator function for put request.
 *
 * @param {String} path
 * @param {Object} params
 * @param {JSON} headers
 * @returns {*}
 *
 */
export const patch = (path, params = null, headers = null) => {
  const body = params ? JSON.stringify(params) : {}
  const options = {
    credentials: 'same-origin',
    method: 'PUT',
    body,
    headers: { ...defaultHeaders, ...headers }
  }
  return request(path, options)
}


/**
 * Generator function for suspend request.
 *
 * @param {String} path
 * @param {JSON} headers
 * @returns {*}
 *
 */
export const suspend = (path, headers = null) => {
  const options = {
    credentials: 'same-origin',
    method: 'PUT',
    headers: { ...suspendHeaders, ...headers }
  }
  return request(path, options)
}

/**
 * Generator function for delete request.
 *
 * @param {String} path
 * @param {Object} params
 * @param {JSON} headers
 * @returns {*}
 *
 */
export function * deleteRequest (path, headers = null) {
  const options = {
    credentials: 'same-origin',
    method: 'DELETE',
    body: {},
    headers: { ...deleteHeaders, ...headers }
  }

  const url = path
  const token = yield select(getToken)

  if (token) {
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
    return yield fetch(url, { ...options, headers }).then(checkStatus)
  }
  return yield fetch(url, options).then(checkStatus)
}

export const form = (path, formData = null, headers = null) => {
  const options = {
    credentials: 'same-origin',
    method: 'POST',
    body: formData
  }

  return request(path, options)
}

const exports = { get, form, post, patch, suspend, deleteRequest }
export default exports
