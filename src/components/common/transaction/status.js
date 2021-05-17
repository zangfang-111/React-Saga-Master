import React from 'react'

import images from '../../../assets'

/**
 * Render element of status section.
 *
 * @param {Object} data
 * @returns {Component}
 *
 */
function RenderStatus ({ data }) {
  /**
   * Image define by transaction order type.
   */
  const image = data.toWalletAddress
    ? images.ArrowUpBlue
    : images.ArrowDownBlue

  /**
   * Order text define by transaction order type.
   */
  const text = data.toWalletAddress
    ? 'Sent BTC'
    : 'Bought BTC'

  /**
   * Crypto amount define with currency for optimize purpose.
   */
  const btcAmount = `${data.cryptoAmount || '0'} ${data.cryptoCurrency || 'BTC'}`

  /**
   * Transaction status text define by response data.
   */
  const statusTxt = data.status === 'Declined'
    ? 'Transaction failed'
    : 'Transaction completed'

  return (
    <div className='item status'>
      {data.status !== 'Declined' && (
        <div className='is-flex align'>
          <img src={image} alt='' />
          <small className='type'>
            {text}
          </small>
        </div>
      )}
      <h3 className={`${data.orderType} ${data.status}`}>
        {btcAmount}
      </h3>
      <small>status</small>
      <p className={`${data.status}`}>
        {statusTxt}
      </p>
      <span>
        This transaction was fully reviewed and
        fulfills Digital Money's security standards.
      </span>
    </div>
  )
}

export default RenderStatus
