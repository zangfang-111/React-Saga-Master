import React from 'react'

/**
 * Reusable/optimized table component for all table section of this project.
 *
 * @param {Array} header // table header array of object(header name and id)
 * @param {Array} data // table body array of object (content can be contain string and component)
 * @returns {Component}
 *
 */
function BaseTable ({ header, data }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          {header.map((h, i) => (
            <th key={i}>{h.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(!data || data.length === 0) && (
          <tr>
            <td colSpan={header.length}>
              No data
            </td>
          </tr>
        )}
        {data.map((row, i) => (
          <tr
            key={i}
            className={`${row.action ? 'cursor' : ''}`}
            onClick={row.action && row.action}
          >
            {row.cols.map((col, j) => (
              <td
                className={`${i === 0 ? 'no-border' : ''}`}
                key={`${i}-${j}`}
                id={col.id || ''}
              >
                {col.content}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BaseTable
