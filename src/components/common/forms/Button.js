import React from 'react'

import Loader from '../../animation/Loader'

/**
 * Optimized button formatted with this project button style.
 *
 * @param {String} name
 * @param {Function} action
 * @param {String} classes // optional
 * @param {*} icon // optional
 * @param {Boolean} isLoading
 * @return {Component}
 *
 */

function Button ({
  action,
  name,
  icon,
  classes = '',
  isLoading
}) {
  return (
    <div
      className={`button ${classes}`}
      onClick={() => action()}
    >
      {icon && <img src={icon} alt='' />}
      {isLoading
        ? <Loader width={50} height={50} animation='ButtonLoader' />
        : name}
    </div>
  )
}

export default Button
