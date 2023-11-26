import React from 'react'
import AuthImage from '../components/AuthImage'
import { Outlet } from 'react-router-dom'

function Authenticaton() {
  return (
    <div>
        <AuthImage />
        <Outlet />
      
    </div>
  )
}

export default Authenticaton
