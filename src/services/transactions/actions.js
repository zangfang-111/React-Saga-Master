import { createAction } from 'redux-actions'

// Constants define for get transaction info.
export const GET_TR_INFO = 'GET_TR_INFO'
export const GET_TR_INFO_SUCCESS = 'GET_TR_INFO_SUCCESS'
export const GET_TR_INFO_ERROR = 'GET_TR_INFO_ERROR'

// Actions define for get transaction info which used createAction of redux-actions.
export const getTRInfo = createAction(GET_TR_INFO)
export const getTRInfoSuccess = createAction(GET_TR_INFO_SUCCESS)
export const getTRInfoError = createAction(GET_TR_INFO_ERROR)

// Constants define for get transaction statistics info.
export const GET_TR_STATIS = 'GET_TR_STATIS'
export const GET_TR_STATIS_SUCCESS = 'GET_TR_STATIS_SUCCESS'
export const GET_TR_STATIS_ERROR = 'GET_TR_STATIS_ERROR'

// Actions define for get transaction statistics info which used createAction of redux-actions.
export const getTRStatis = createAction(GET_TR_STATIS)
export const getTRStatisSuccess = createAction(GET_TR_STATIS_SUCCESS)
export const getTRStatisError = createAction(GET_TR_STATIS_ERROR)

// Constants define for get transactions list.
export const GET_TR_LIST = 'GET_TR_LIST'
export const GET_TR_LIST_SUCCESS = 'GET_TR_LIST_SUCCESS'
export const GET_TR_LIST_ERROR = 'GET_TR_LIST_ERROR'

// Actions define for get transaction list which used createAction of redux-actions.
export const getTRList = createAction(GET_TR_LIST)
export const getTRListSuccess = createAction(GET_TR_LIST_SUCCESS)
export const getTRListError = createAction(GET_TR_LIST_ERROR)

// Constants define for get transaction details.
export const GET_TR_DETAILS = 'GET_TR_DETAILS'
export const GET_TR_DETAILS_SUCCESS = 'GET_TR_DETAILS_SUCCESS'
export const GET_TR_DETAILS_ERROR = 'GET_TR_DETAILS_ERROR'

// Actions define for get transaction details which used createAction of redux-actions.
export const getTRDetails = createAction(GET_TR_DETAILS)
export const getTRDetailsSuccess = createAction(GET_TR_DETAILS_SUCCESS)
export const getTRDetailsError = createAction(GET_TR_DETAILS_ERROR)

// Constants define for get user's transaction details.
export const GET_USER_TR = 'GET_USER_TR'
export const GET_USER_TR_SUCCESS = 'GET_USER_TR_SUCCESS'
export const GET_USER_TR_ERROR = 'GET_USER_TR_ERROR'

// Actions define for get user's transaction details which used createAction of redux-actions.
export const getUserTR = createAction(GET_USER_TR)
export const getUserTRSuccess = createAction(GET_USER_TR_SUCCESS)
export const getUserTRError = createAction(GET_USER_TR_ERROR)
