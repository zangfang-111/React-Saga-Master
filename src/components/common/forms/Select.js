import React from 'react'
import Select from 'react-select'

/**
 * Optimized Select Input formatted with this project select input style.
 *
 * @param {Object} options
 * @param {String} value
 * @param {Function} onChange
 * @param {String} calsses
 * @param {String} title // optional
 * @returns {Component}
 *
 */
function SelectComponent ({
  options,
  classes,
  title,
  value,
  name,
  onChange = () => console.log()
}) {
  return (
    <div
      data-testid='select'
      className={`select is-flex align flex-btn cursor ${classes || ''}`}
    >
      {title && <p>{title}</p>}
      <Select
        className='re-select'
        options={options}
        defaultValue={options[0]}
        value={value}
        onChange={e => onChange(name, e)}
      />
    </div>
  )
}

export default SelectComponent
