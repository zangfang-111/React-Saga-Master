import React from 'react'
import ReactFlagsSelect from 'react-flags-select'

/**
 * Country picker componenet which used region selector.
 *
 * @param {String} name
 * @param {String} value
 * @param {Function} onChange
 * @returns {Component}
 *
 */
function CountryPicker ({
  name,
  value,
  onChange,
  disabled
}) {
  return (
    <ReactFlagsSelect
      defaultCountry='UK'
      searchable
      selected={value}
      disabled={disabled || disabled}
      searchPlaceholder='Search for a country'
      onSelect={val => onChange(name, val)}
    />
  )
}

export default CountryPicker
