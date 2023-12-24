import React from 'react'
import Logo from '../assets/logo.png'

function AuthImage() {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
      <img src={Logo} alt="" style={{marginBottom:"10px"}} />
      <h2 className='text-light' style={{fontFamily:"Montserrat", fontWeight:"700"}}>Peduli Belajar</h2>
    </div>
  )
}

export default AuthImage
