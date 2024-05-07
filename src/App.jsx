import React from 'react'

import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Success from './pages/Success'


const App = () => {
  return (
    <main className=' p-4'>
      <BrowserRouter>
        <Routes>
          <Route Component={HomePage} path='/'/>
          <Route Component={Login} path='/signup'/>
          <Route Component={Success} path='/success'/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App