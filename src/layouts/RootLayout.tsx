import React from 'react'
import {
  Header, Footer
} from 'modules'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Header />
        <main className='main'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
