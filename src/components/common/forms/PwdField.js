import React from 'react'

/**
 * Optimized Input formatted with this project input style.
 *
 * @param {Function} onChange
 * @param {String} value
 * @param {String} name
 * @param {Function} pwdAction
 * @return {Component}
 *
 */

function PwdField ({
  onChange,
  value,
  name,
  pwdAction
}) {
  return (
    <div className='pwd-input is-flex align relative'>
      <input
        placeholder='********'
        onChange={e => onChange(name, e)}
        value={value}
        name={name}
        disabled
      />
      <a onClick={pwdAction}>
        Change password?
      </a>
    </div>
  )
}

export default PwdField
