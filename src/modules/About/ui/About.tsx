import React from 'react'
import './about.scss'
import { motion } from 'framer-motion'
import { motionInBottom } from 'helpers/animations'
import image from 'assets/image/amazon.webp'

export default function About() {
  return (
    <section className='about'>
      <div className='about__container'>

        <div className='about__top'>
          <motion.div
            className='about__image'
            initial='hidden' animate='visible' variants={motionInBottom}
          >
            <img src={image} alt="about" />
          </motion.div>

          <div className='about__description'>
            <div className="about__title">
              BFarm!
            </div>

            <p className="about__text">
              Welcome to our "About" page. We are a seasoned Amazon agency, a team of professionals dedicated to helping brands amplify their presence on Amazon since 2015.
            </p>
          </div>
        </div>

        <div className='about__dream'>
          <p> Our specialty lies in product page optimization and advertising management on Amazon. Our strategies are designed to make your product listings more appealing and visible, driving more potential customers to your page and compelling them to purchase. We don't just focus on increasing sales, but also work extensively on enhancing the product page conversion rate and Click-Through Rate (CTR).</p>
          <p>But we understand that successful eCommerce is not just about sales volume, it's about profitability. That's why we also focus on optimizing your ad expenditure, ensuring that your advertising efforts yield maximum return on investment.</p>
          <p>We also offer comprehensive account management services. We understand the complexities of Amazon's marketplace and have the skills to resolve any issues that may arise, from listing problems to account issues.</p>
          <p>Our agency is your partner in growth. We know that scaling an online business requires strategic planning and a keen market understanding. Our team is equipped to help you successfully scale your Amazon business, always keeping you a step ahead of the competition.</p>
          <p>Since our establishment in 2015, we have been committed to growing brands on Amazon, focusing on enhancing profitability. Our guarantee is not just increased sales, but a more profitable business. Partner with us and experience the difference we can make in your Amazon journey.</p>
        </div>
      </div>
    </section>
  )
}
