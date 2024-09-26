import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Add } from './components/Add'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hi Welcome here</h1>
     <h3>Todays Components</h3>
     <h4>React contents</h4>
   <Home/>
   <Add/>
    </>
  )
}

export default App
