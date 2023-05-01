import React from 'react'
import Typed from 'react-typed';

import image1 from 'assets/image/brands/1.png'
import image2 from 'assets/image/brands/2.png'
import image3 from 'assets/image/brands/3.png'

import './promo.scss'

export default function Promo() {
  return (
    <div className='promo'>
      <div className='promo__container'>

        <div className='promo__title'>
          <Typed
            strings={['indicates',
              'business',
              'beyond',
              'delivered']}
            typeSpeed={150}
            backSpeed={100}
            startDelay={1500}
            loop
          />
        </div>

        <div className='promo__text'>
          <strong>News from beauty to business and beyond</strong> - plus an inspiring interview - delivered with a cheeky twist to your inbox daily, for free.
        </div>

        <form className='promo__form form'>
          <input className='form__field' type="email" placeholder='Your Email' required />
          <input className='form__btn' type="submit" value='Try it' />
        </form>

        <div className='promo__brands'>
          <img src={image1} alt="brand" />
          <img src={image2} alt="brand" />
          <img src={image3} alt="brand" />
        </div>
      </div>
    </div>
  )
}
