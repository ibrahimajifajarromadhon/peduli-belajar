import React from 'react'
import Navbar from '../components/Navbar'

const BerandaKelas = () => {
  return (
    <>
    <Navbar />
    <div className='d-flex mt-3 title '>
        <h6>Topik Kelas</h6>
        <input
            className="form-control ms-auto"
            type="search"
            placeholder="Cari Kursus terbaik"
            aria-label="Search"
          />
    </div>
    <div className='btn-menu d-flex mt-4'>
        <button className='btn btn-light me-3'>All</button>
        <button className='btn btn-light me-3'>Kelas Premium</button>
        <button className='btn btn-light me-3'>Kelas Gratis</button>
    </div>
    </>
  )
}

export default BerandaKelas