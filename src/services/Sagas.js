import { fork, all } from 'redux-saga/effects'

import signInSaga from './signin/saga'
import forgotSaga from './forgot/saga'
import userSaga from './user/saga'
import trSaga from './transactions/saga'
import adminSaga from './admin/saga'
import statisSaga from './statistics/saga'
import signUpSaga from './signup/saga'

/**
 * Fetch all sagas with using yield all and fork of redux-saga effects.
 */
function * rootSagas () {
  yield all([
    fork(signInSaga),
    fork(forgotSaga),
    fork(userSaga),
    fork(trSaga),
    fork(adminSaga),
    fork(statisSaga),
    fork(signUpSaga)
  ])
}

export default rootSagas
