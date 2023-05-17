import React from 'react'
import { Helmet } from 'react-helmet'
import { Privacy } from 'modules'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>BFarm | Privacy</title>
      </Helmet>

      <Privacy />
    </>
  )
}
