import React, { useEffect } from 'react'

import Header from './header'
import Details from './transfer'
import Loader from '../../animation/Loader'

/**
 * Transfer details component by transaction ID.
 *
 * @param {Function} setTab
 * @param {String} active
 * @param {Function} getTRDetails
 * @param {Object} TRDetails
 * @param {String} page
 * @returns {Component}
 *
 */
function Transaction ({
  setTab,
  active,
  getTRDetails,
  TRDetails,
  page
}) {
  /**
   * Get transfer details info in component did mount lifecycle.
   */
  useEffect(() => {
    getTRDetails(active)
  }, [active])

  /**
   * Response data status check. if {} then return loader.
   */
  if (!TRDetails) {
    return <Loader width={200} height={100} />
  }

  return (
    <div className='transaction'>
      <Header
        setTab={setTab}
        id={active}
        page={page}
      />
      <Details data={TRDetails} />
    </div>
  )
}

export default Transaction
