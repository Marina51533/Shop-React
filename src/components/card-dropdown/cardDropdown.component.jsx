import './cardDropdown.styles.scss'
import Button from '../button/button.component'

import React from 'react'

const CardDropdown = () => {
  return (
    <div className='card-dropdown-container'>
      <div className='card-items'></div>
      <Button>Click</Button>
    </div>
  )
}

export default CardDropdown

