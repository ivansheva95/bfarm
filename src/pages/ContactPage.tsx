import { Contact } from 'modules'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>BFarm | Contact</title>
      </Helmet>

      <Contact />
    </>
  )
}
