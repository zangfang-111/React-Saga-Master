import React from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'

/**
 * Modal wrapper with using Rodal module for optimize purpose.
 *
 * @param {Component} children
 * @param {Boolean} visible
 * @param {Function} close
 * @param {String} height
 * @param {String} width
 * @return {Component}
 *
 */

function ModalWrapper ({
  visible,
  close,
  children,
  height = 430,
  width = 508
}) {
  return (
    <Rodal
      visible={visible}
      onClose={() => close()}
      width={width}
      height={height}
      customStyles={{
        border: '1px solid #c9b177',
        borderRadius: '10px'
      }}
    >
      {children}
    </Rodal>
  )
}

export default ModalWrapper
