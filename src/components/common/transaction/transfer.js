import React from 'react'

import RenderStatus from './status'
import { getTransferData } from './utils'

/**
 * Transfer details component.
 *
 * @param {Array} data
 * @returns {Component}
 *
 */
function TransferDetails ({ data }) {
  const transfers = getTransferData(data)

  /**
   * Render Item for details field.
   *
   * @param {Object} item
   * @returns {Component}
   *
   */
  const renderItem = (item) => (
    <div className='item' key={item.key}>
      <small>{item.key}</small>
      <p>{item.name}</p>
    </div>
  )

  return (
    <div className='details'>
      <RenderStatus data={data} />
      {transfers.map(t => renderItem(t))}
    </div>
  )
}

export default TransferDetails
