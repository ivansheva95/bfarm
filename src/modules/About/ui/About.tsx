import React from 'react'
import './about.scss'
import about from 'assets/image/about.gif'
import { motion } from 'framer-motion'
import { motionInBottom } from 'helpers/animations'

export default function About() {
  return (
    <section className='about'>
      <div className='about__container'>

        <div className='about__top'>
          <motion.div
            className='about__image'
            initial='hidden' animate='visible' variants={motionInBottom}
          >
            <img src={about} alt="about" />
          </motion.div>

          <div className='about__description'>
            <div className="about__title">
              BFarm!
            </div>

            <p className="about__text">
              We’re a next gen media company and custom creative agency that empowers, motivates, and informs women every morning. Our mission is to make women across the globe feel more powerful every single day with engaging and digestible content.
            </p>
          </div>
        </div>

        <div className='about__dream'>
          <p>My dream is for every person—no matter your circumstances, background, qualifications or heritage—to feel inspired to thrive every single day.</p>
        </div>
      </div>
    </section>
  )
}
