import { About } from 'modules'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>BFarm | About</title>
      </Helmet>

      <About />
    </>
  )
}
