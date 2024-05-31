import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AllRoute from './component/AllRoute'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Navbar/>
    <AllRoute/>
    </>
  )
}

export default App
