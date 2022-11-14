import React from 'react'
import spin from '../../../assets/images/tail-spin.svg'

export const Preloader = () => {
  return (
    <div>
      <img src={spin} alt={'preloader'} />
    </div>
  )
}
