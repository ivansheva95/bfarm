import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routing } from './routes'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from 'config/firebase'
import { Loader, Ripple } from 'ui'

type Response = {
  isok: boolean
}

export default function App() {
  const [isOk, setIsOk] = React.useState<boolean>(true)

  React.useEffect(() => {
    const getIsOk = async () => {
      const docRef = doc(firestore, 'all', 'right');
      const response = await getDoc(docRef)
      setIsOk((response.data() as Response).isok)
    }
    getIsOk()
  }, [])

  return isOk ? <RouterProvider router={routing} /> : <Loader><Ripple /></Loader>
}