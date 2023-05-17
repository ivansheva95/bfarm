import React from 'react'
import { Icon } from 'ui'
import './socials.scss'
import Social from './Social'

export default function Socials() {

  return (
    <div className='socials'>

      <div className='socials__btn'>
        <span>Socials</span>
        <Icon name='create' />
      </div>

      <ul className='socials__list'>
        <Social href='https://www.facebook.com/maksym.lazuto' name='facebook' />
        <Social href='https://www.linkedin.com/in/maksym-lazuto/' name='linkedin' />
      </ul>
    </div >
  )
}
