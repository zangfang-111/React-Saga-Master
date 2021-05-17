import React from 'react'

import images from '../../../assets'

/**
 * Transfer details page header which include
 * user id, explorer button.
 *
 * @param {Function} setTab
 * @param {String} id
 * @param {String} page
 * @returns {Component}
 *
 */
function Header ({ setTab, id, page }) {
  /**
   * page pop action with page type.
   */
  function actionPop () {
    const tab = page === 'user' ? 1 : 0
    setTab(tab)
  }

  return (
    <div className='is-flex align flex-btn d-header'>
      <a className='is-flex align' onClick={actionPop}>
        <img src={images.ChevronLeft} alt='chevron-left' />
        <h3>{`Transaction ${id}`}</h3>
      </a>
    </div>
  )
}

export default Header
