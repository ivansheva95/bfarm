import React from 'react'
import './contact.scss'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className='contact'>
      <div className='contact__container'>
        <h2 className='contact__title'>
          <p>GET IN</p>
          <p>TOUCH</p>
        </h2>
        <div className='contact__address'>

          <div className='contact__block'>
            <div>
              <p>GENERAL</p>
              <Link to='mailto:websitebfarm@gmail.com'>websitebfarm@gmail.com</Link>
            </div>
          </div>
          <div className='contact__block'>
            <div>
              <p>Telegram</p>
              <Link to='https://t.me/bfarm_ama/zon'>https://t.me/bfarm_ama/zon</Link>
            </div>
          </div>

          <div className='contact__block'>
            <div>
              <p>ADDRESS</p>
              <span>
                Gulliver <br />
                Sportyvna Square, 1A <br />
                Kyiv 01023 <br />
                Ukraine <br />
              </span>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
