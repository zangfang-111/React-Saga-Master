import React from 'react'
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

/**
 * Graphic charts using recharts module.
 *
 * @param {Object} data
 * @param {String} color
 * @param {String} symbol
 * @returns {Component}
 *
 */
function BaseCharts ({ data, color, symbol }) {
  return (
    <ResponsiveContainer width='100%' height={93}>
      <AreaChart
        className={`${symbol || ''}`}
        data={data}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
      >
        <defs>
          <linearGradient id={`color${color}`} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={color} stopOpacity={0.5} />
            <stop offset='95%' stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip labelStyle={{ color }} />
        <Area
          type='monotone'
          dataKey='value'
          stroke={color}
          fillOpacity={1}
          fill={`url(#color${color})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default BaseCharts
