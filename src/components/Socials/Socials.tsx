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
        {Array(4).fill(0).map(() => React.Children.toArray(<Social />))}
      </ul>
    </div >
  )
}
