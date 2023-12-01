import React from 'react'
import { Link } from 'react-router-dom'

function SidebarProfile() {
  return (
    <div  className='d-flex flex-column w-50 p-4 gap-2'>
        <Link to={"myProfile"} className='btn btn-success'>Profile saya</Link>
        <Link to={"changePassword"} className='btn btn-danger'>Ubah password</Link>
        <Link to={"paymentHistory"} className='btn btn-primary'>Riwayat Pembayaran</Link>
        <button>logout</button>
    </div>
  )
}

export default SidebarProfile
