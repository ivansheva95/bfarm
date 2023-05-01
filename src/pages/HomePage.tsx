import { Promo } from 'modules'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>BFarm | Home</title>
      </Helmet>

      <Promo />
    </>
  )
}
