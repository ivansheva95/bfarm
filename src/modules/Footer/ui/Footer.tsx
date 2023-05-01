import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__navigate'>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </footer>
  )
}
