import React from 'react'
import Kelas from './layouts/Kelas'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BerandaKelas from './pages/BerandaKelas'
import BerandaKelasKu from './pages/BerandaKelasKu'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/kelas' element={<Kelas />}>
        <Route path='berandaKelas' element={<BerandaKelas/>} />
        <Route path='berandaKelasKu' element={<BerandaKelasKu/>} />
      </Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App