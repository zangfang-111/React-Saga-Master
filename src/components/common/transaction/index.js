import Transaction from './view'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { getTRDetails } from '../../../services/transactions/actions'

/**
 * The function for get state of props.
 *
 * @param {*} state
 * @returns {*}
 *
 */
const mapStateToProps = state => ({
  TRDetails: state.getIn(['trReducer', 'TRDetails'])
})

/**
 * The function for actions dispatch.
 * @param {*} dispatch
 * @returns {*}
 *
 */
const mapDispatchToProps = dispatch => ({
  getTRDetails: params => {
    dispatch(getTRDetails(params))
  }
})

/**
 * Export with wrap of compose and connect of redux features.
 */
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Transaction)
