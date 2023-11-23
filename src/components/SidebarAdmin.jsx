import React from 'react'
import { Link } from 'react-router-dom'

function SidebarAdmin() {
  

  return (
    <div className='fixed-left d-flex flex-column bg-primary  vh-100'>
      <Link to={"dashboard"}   className='btn btn-warning mx-3 my-5'>dashboard</Link>
      <Link to={"class"} className='btn btn-success mx-3 my-5'>kelola kelas</Link>
      <button className='btn btn-danger mx-3 my-5'>log Out</button>
    </div>
  )
}

export default SidebarAdmin