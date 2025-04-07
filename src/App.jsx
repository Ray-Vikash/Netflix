import { use, useState } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.value)
const navigate = useNavigate()
useEffect(() => {
  onAuthStateChanged(auth, async (user) => {
if(user){
  console.log(user.name + " is logged in")
  navigate('/')
}else{
  console.log("No user is logged in")
  navigate('/login')
}
  })
}, [])

  return (
    <>
      <div>
        <ToastContainer theme='dark'/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/player/:id' element={<Player />} />
        </Routes>
      </div>
    </>
  )
}

export default App
