import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import  Add  from './components/Add'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'


function App() { const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Hi Welcome here</h1>
      <h3>Todays Components</h3>
      <h4>React contents</h4> */}
     <Nav />
   
      {/* <Add/> */}
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Add' element={<Add/>}></Route>
      </Routes>
     
    </>
  );
}

export default App;
