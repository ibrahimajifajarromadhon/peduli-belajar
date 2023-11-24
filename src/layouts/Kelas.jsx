import React from 'react'
import FilterKelas from '../components/FilterKelas'
import ListCourse from '../components/ListCourse'
import { Outlet } from 'react-router-dom'

const Kelas = () => {
  return (
    <>
    <Outlet />
    <div className="d-flex mt-5 container">
        <FilterKelas />
        <div className='list-course'>
        <ListCourse />
        </div>
    </div>
    </>
  )
}

export default Kelas