import React from 'react'
import './loader.scss'

type LoaderType = {
  children: React.ReactNode
}

export default function Loader({ children }: LoaderType) {
  return (
    <div className='loader'>
      {children}
    </div>
  )
}
