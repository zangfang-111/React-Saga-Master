import React from 'react'

import images from '../../../assets'

/**
 * Optimized Search Input formatted
 * with this project filter style.
 *
 * @param {String} placeholder
 * @param {Function} onChange
 * @param {String} value
 * @param {String} name
 * @param {String} classes // optional
 * @return {Component}
 *
 */

function SearchField ({
  placeholder,
  classes,
  name,
  value,
  onChange = () => console.log()
}) {
  return (
    <div className={`search-input is-flex align ${classes}`}>
      <img src={images.SearchIcon} alt='search' />
      <input
        placeholder={placeholder}
        onChange={e => onChange(name, e)}
        value={value}
      />
    </div>
  )
}

export default SearchField
