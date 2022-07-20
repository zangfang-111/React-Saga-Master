import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'

import * as Actions from './actions'

// Initial states define which includes signIn status.
const initialState = fromJS({
  TRInfo: null,
  TRStatis: null,
  TRList: null,
  TRDetails: null,
  userTR: null
})

// reducer define which used handleActions of redux-actions.
const reducer = handleActions(
  {
    // get transactions information reducer.
    [Actions.getTRInfoSuccess] (state, { payload }) {
      return state.set('TRInfo', payload)
    },
    [Actions.getTRInfoError] (state) {
      return state.set('TRInfo', null)
    },

    // get transactions statistics information reducer.
    [Actions.getTRStatisSuccess] (state, { payload }) {
      return state.set('TRStatis', payload)
    },
    [Actions.getTRStatisError] (state) {
      return state.set('TRStatis', null)
    },

    // get transactions list reducer.
    [Actions.getTRListSuccess] (state, { payload }) {
      return state.set('TRList', payload)
    },
    [Actions.getTRListError] (state) {
      return state.set('TRList', null)
    },

    // get a transaction details reducer.
    [Actions.getTRDetailsSuccess] (state, { payload }) {
      return state.set('TRDetails', payload)
    },
    [Actions.getTRDetailsError] (state) {
      return state.set('TRDetails', null)
    },

    // get a user's transaction details reducer.
    [Actions.getUserTRSuccess] (state, { payload }) {
      return state.set('userTR', payload)
    },
    [Actions.getUserTRError] (state) {
      return state.set('userTR', null)
    }
  },
  initialState
)

export default reducer
