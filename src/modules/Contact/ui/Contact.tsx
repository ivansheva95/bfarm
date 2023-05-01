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
            <div >
              <p>ADVERTISE</p>
              <Link to='#'>ADS@THENEWSETTE.COM</Link>
            </div>

            <div>
              <p>PRESS INQUIRES</p>
              <Link to='#'>INQUIRIES@THENEWSETTE.COM</Link>
            </div>
          </div>

          <div className='contact__block'>
            <div>
              <p>CAREERS</p>
              <Link to='#'>JOIN THE TEAM HERE</Link>
            </div>

            <div>
              <p>GENERAL</p>
              <Link to='#'>NEWSETTE@THENEWSETTE.COM</Link>
            </div>
          </div>

          <div className='contact__block'>
            <div>
              <p>ADDRESS</p>
              <span>
                Newsette, LLC <br />
                228 Park Ave S Suite 62351 <br />
                New York NY 10003 <br />
                United States <br />
              </span>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
