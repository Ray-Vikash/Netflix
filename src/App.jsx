import { useState } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'


function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.value)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/player' element={<Player />} />
        </Routes>
      </div>
    </>
  )
}

export default App
