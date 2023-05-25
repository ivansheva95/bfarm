import React from 'react'
import { Socials } from 'components'
import { Link } from 'react-router-dom'
import './header.scss'
import bfarm from 'assets/image/bfarm.png'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__logo' to='/'>
          <img width={80} src={bfarm} alt="bfarm" />
        </Link>
        <Socials />
      </div>
    </header>
  )
}
