import React from 'react'

/**
 * Optimized Input formatted with this project input style.
 *
 * @param {String} placeholder
 * @param {String} type // optional
 * @param {Function} onChange
 * @param {String} value
 * @param {String} name
 * @param {String} disabled // optional
 * @param {String} classes // optional
 * @param {Function} forgotAction // for sepcial component (optional)
 * @return {Component}
 *
 */

function Input ({
  placeholder,
  type,
  onChange,
  value,
  name,
  disabled,
  classes = '',
  forgotAction
}) {
  return (
    <div className={`input ${classes}`}>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        onChange={e => onChange(name, e)}
        value={value}
        name={name}
        disabled={disabled || disabled}
        data-testid={name}
      />
      {forgotAction && (
        <a onClick={forgotAction}>
          Forgot?
        </a>
      )}
    </div>
  )
}

export default Input
