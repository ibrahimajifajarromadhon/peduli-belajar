import React from 'react'
import Logo from '../assets/logo.png'

function AuthImage() {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
      <img src={Logo} alt="" />
      <h2 className='text-light'>PeduliBelajar</h2>
    </div>
  )
}

export default AuthImage
