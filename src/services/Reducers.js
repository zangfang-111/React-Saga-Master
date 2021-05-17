import { combineReducers } from 'redux-immutable'

import signInReducer from './signin/reducer'
import userReducer from './user/reducer'
import forgotReducer from './forgot/reducer'
import trReducer from './transactions/reducer'
import adminReducer from './admin/reducer'
import statisReducer from './statistics/reducer'
import signUpReducer from './signup/reducer'

/**
 * Export combined reducers by combineReducers of redux-immutable.
 */
export default combineReducers({
  signInReducer,
  userReducer,
  forgotReducer,
  trReducer,
  adminReducer,
  statisReducer,
  signUpReducer
})
