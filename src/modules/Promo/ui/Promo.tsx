import React from 'react'
import Typed from 'react-typed';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Icon } from 'ui';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import image1 from 'assets/image/brands/1.png'
import image2 from 'assets/image/brands/2.png'
import image3 from 'assets/image/brands/3.png'

import './promo.scss'

export default function Promo() {
  const [isSubmittingMessage, setIsSubmittingMessage] = React.useState(false)
  const [isConfetti, setISConfetti] = React.useState(false)
  const form = React.useRef<HTMLFormElement>(null);
  const { width, height } = useWindowSize()

  const handleSendEmail: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setIsSubmittingMessage(true)

    // const target = event.target as typeof event.target & { email: { value: string } }

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID as string,
      process.env.REACT_APP_TEMPLATE_ID as string,
      form.current as HTMLFormElement,
      process.env.REACT_APP_PUBLIC_ID as string
    )
      .then((result) => {
        toast.success('THANK YOU!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setISConfetti(true)
      }, (error) => {
        toast.error(error.text, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .finally(() => {
        setIsSubmittingMessage(false)
        form.current?.reset()
      })
  }

  return (
    <div className='promo'>
      <div className='promo__container'>

        <div className='promo__title'>
          <p>IS FOR</p>
          <Typed
            strings={['New', 'Ambition', 'Great', 'Big', 'Strong']}
            typeSpeed={150}
            backSpeed={100}
            startDelay={500}
            loop
          />
          <p>Amazon Brands</p>
        </div>

        <div className='promo__text'>
          <strong>In BFarm, we Guarantee results.</strong>That’s why we are trying to choose brands carefully to work with. Leave your email, receive & fill out Google Form to be considered.
        </div>

        <form className='promo__form form' ref={form} onSubmit={handleSendEmail}>
          <input
            className='form__field'
            name='email'
            type="email"
            placeholder='Your Email'
            required
          />
          <input
            className='form__btn'
            type="submit"
            value={isSubmittingMessage ? 'Submitting...' : 'Try it'}
          />
          <div className='form__actions'>
            <span>
              <Icon name='arrow' height={23} width={68} />
            </span>

            <div>
              <span>
                <Icon name='click' height={32} width={62} />
              </span>
              <span>
                <Icon name='click' height={32} width={62} />
              </span>
            </div>
          </div>
        </form>
        {
          isConfetti &&
          <Confetti
            drawShape={ctx => {
              ctx.beginPath()
              for (let i = 0; i < 22; i++) {
                const angle = 0.35 * i
                const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                ctx.lineTo(x, y)
              }
              ctx.stroke()
              ctx.closePath()
            }}
          />
        }


        <div className='promo__brands'>
          <img src={image1} alt="brand" />
          <img src={image2} alt="brand" />
          <img src={image3} alt="brand" />
        </div>
      </div>
    </div>
  )
}
