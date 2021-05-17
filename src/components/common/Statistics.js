import React from 'react'

import Select from './forms/Select'

/**
 * Statistics reusable component.
 * @param {Array} options // select options
 * @param {Array} data // card fields data
 * @returns {Component}
 *
 */
function Statistics ({ options, data, value, onChange }) {
  /**
   * Statistics card component
   *
   * @param {Array} data
   * @param {Boolean} last // last element's style handle purpose
   * @returns {Component}
   *
   */
  const statsCard = (data, last) => (
    <div
      key={data.title}
      className={`stats-card ${last ? 'no-border' : ''}`}
    >
      <div className='is-flex align flex-btn'>
        <p>{data.title}</p>
        <h4 className={`status${data.status}`}>
          {data.amount}
        </h4>
      </div>
      <small>{data.desc}</small>
    </div>
  )

  return (
    <div className='statistics'>
      <div className='is-flex align flex-btn'>
        <h4>Statistics</h4>
        <Select
          options={options}
          value={value}
          onChange={onChange}
          name='type'
        />
      </div>
      <div className='card-section'>
        {data.map((s, i) => statsCard(s, data.length - 1 === i))}
      </div>
    </div>
  )
}

export default Statistics
