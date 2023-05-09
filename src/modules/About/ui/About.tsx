import React from 'react'
import './about.scss'
import { motion } from 'framer-motion'
import { motionInBottom } from 'helpers/animations'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from 'config/firebase'
import { Loader, Ripple } from 'ui'

export default function About() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [content, setContent] = React.useState<any>()

  React.useEffect(() => {
    const getContent = async () => {
      try {
        setIsLoading(true)
        const aboutRef = doc(firestore, 'AboutPage', 'AboutDescription')
        const response = await getDoc(aboutRef)
        setContent(response.data())

      } catch (error) {
        console.error((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    getContent()
  }, [])

  if (isLoading) return <Loader><Ripple /></Loader>
  return (
    <section className='about'>
      <div className='about__container'>

        <div className='about__top'>
          <motion.div
            className='about__image'
            initial='hidden' animate='visible' variants={motionInBottom}
          >
            <img src={content?.image} alt="about" />
          </motion.div>

          <div className='about__description'>
            <div className="about__title">
              {content?.title}
            </div>

            <p className="about__text">
              {content?.text}
            </p>
          </div>
        </div>

        <div className='about__dream'>
          <p> {content?.dream}</p>
        </div>
      </div>
    </section>
  )
}
