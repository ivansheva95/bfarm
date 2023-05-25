import { Promo } from 'modules'
import React from 'react'
import { Helmet } from 'react-helmet'
import BG from 'ui/BG/BG'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>BFarm | Amazon Sales Partner</title>
      </Helmet>

      <Promo />
      <BG />
    </>
  )
}
