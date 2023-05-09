import React from 'react'
import Typed from 'react-typed';
import {
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
import { firestore } from 'config/firebase';
import { toast } from 'react-toastify';

import { Loader, Ripple } from 'ui';

import './promo.scss'

export default function Promo() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [content, setContent] = React.useState<any>()

  React.useLayoutEffect(() => {
    const getContent = async () => {
      try {
        setIsLoading(true)
        const promoRef = doc(firestore, 'HomePage', 'PromoDescription')
        const response = await getDoc(promoRef)
        setContent(response.data())
      } catch (error) {
        console.error((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    getContent()
  }, [])

  const handleSendEmail: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const target = event.target as typeof event.target & { email: { value: string } }
    const email = target.email.value

    try {
      const emailsRef = doc(firestore, 'HomePage', 'Emails')
      await setDoc(emailsRef, { [email]: email }, { merge: true })

      toast.info('THANK YOU!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error((error as Error).message)

      toast.error('This email appears to be invalid. Please try again.', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  if (isLoading) return <Loader><Ripple /></Loader>
  return (
    <div className='promo'>
      <div className='promo__container'>

        <div className='promo__title'>
          <Typed
            strings={content?.title ?? []}
            typeSpeed={150}
            backSpeed={100}
            startDelay={500}
            loop
          />
        </div>

        <div className='promo__text'>
          <strong>{content?.text[0]}</strong>{content?.text[1]}
        </div>

        <form className='promo__form form' onSubmit={handleSendEmail}>
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
            value='Try it'
          />
        </form>

        {/* <div className='promo__brands'>
          {(content.brands as []).map(brand => React.Children.toArray(<img src={brand} alt="brand" />))}
        </div> */}
      </div>
    </div>
  )
}
