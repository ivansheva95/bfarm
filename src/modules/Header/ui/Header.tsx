import React from 'react'
import './header.scss'
import { Socials } from 'components'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__logo' to='/'>BFrame</Link>
        <Socials />
      </div>
    </header>
  )
}
