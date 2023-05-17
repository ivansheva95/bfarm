import React from 'react'
import { Socials } from 'components'
import { Link } from 'react-router-dom'
import './header.scss'
import image from 'assets/image/logo.png'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__logo' to='/'>
          BFarm!
          <img width={80} src={image} alt="logo" />
        </Link>
        <Socials />
      </div>
    </header>
  )
}
