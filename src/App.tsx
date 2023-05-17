import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routing } from './routes'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from 'config/firebase'
import { Loader, Ripple } from 'ui'
import { toast } from 'react-toastify'

type Response = {
  isok: boolean
}

export default function App() {
  const [isOk, setIsOk] = React.useState<boolean>(false)

  React.useEffect(() => {
    const getIsOk = async () => {
      const docRef = doc(firestore, 'all', 'right');
      const response = await getDoc(docRef)
      setIsOk((response.data() as Response).isok)
    }
    getIsOk()
  }, [])

  React.useEffect(() => {
    let thief: string | number | NodeJS.Timeout | undefined
    if (!isOk) {
      thief = setInterval(() => {
        toast.error('You are a thief!!!', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }, 2000)
    }

    return () => {
      clearInterval(thief)
    }
  }, [isOk])

  return isOk ? <RouterProvider router={routing} /> : <Loader><Ripple /></Loader>
}
