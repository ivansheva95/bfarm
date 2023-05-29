import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routing } from './routes'

export default function App() {
  return <RouterProvider router={routing} />
}