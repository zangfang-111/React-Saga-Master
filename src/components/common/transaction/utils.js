import moment from 'moment'

/**
 * Generate Transfer data for optimize component
 *
 * @param {Object} data
 * @returns {Array}
 *
 */
export function getTransferData (data) {
  const date = moment(data.updatedAt).format('MMM DD, YYYY - hh:mmA')
  const btcAmount = `${data.cryptoAmount || '0'} ${data.cryptoCurrency || 'BTC'}`
  const fiatAmount = `$${data.fiatAmount || '0'}`

  // default transfers details info
  const transfers = [{
    key: 'Account',
    name: data.UserId
  }, {
    key: 'Date',
    name: date
  }, {
    key: 'Fee',
    name: btcAmount
  }, {
    key: 'Amount in fiat',
    name: fiatAmount
  }, {
    key: 'Amount in BTC',
    name: btcAmount
  }, {
    key: 'Payment ID',
    name: data.paymentId
  }, {
    key: 'Order ID',
    name: data.orderId
  }]

  // if transaction type is sent.
  if (data.toWalletAddress) {
    transfers.push({
      key: 'To',
      name: data.toWalletAddress
    }, {
      key: 'Transaction ID',
      name: data.transactionId
    })
  }

  return transfers
}
