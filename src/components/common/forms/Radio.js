import React from 'react'

/**
 * Optimized Radio formatted with this project input style.
 *
 * @param {String} name
 * @param {String} label
 * @param {Function} onChange
 * @param {Boolean} checked
 * @param {String} description
 * @param {String} labelClass
 * @param {Boolean} disabled
 * @return {Component}
 *
 */

function Radio ({
  label,
  name,
  checked,
  onChange,
  description,
  labelClass,
  disabled
}) {
  return (
    <>
      <input
        type='radio'
        id={name}
        defaultChecked={checked}
        name='radio-group'
        disabled={disabled}
      />
      <label
        className={`${labelClass || ''}`}
        htmlFor={name}
        onClick={() => onChange(name)}
      >
        <strong>{label}</strong>
        <p>{description}</p>
      </label>
    </>
  )
}

export default Radio
