import React from 'react'
import MyNav from './components/MyNav'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Store from './Pages/Store'
import Error from './Pages/Error'

function App() {
  return (
    <div>
      <MyNav/>
    <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/store' element={<Store/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='*' element={<Error/>}/>
<Route/>



    </Routes>
    </div>
  )
}

export default App