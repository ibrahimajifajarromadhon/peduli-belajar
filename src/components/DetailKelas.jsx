import React from 'react'
import VideoPlayer from './VideoPlayer'
import Header from './Header'
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaCirclePlay } from "react-icons/fa6";
import BarProgress from './BarProgress';
import { PiLockKeyFill } from "react-icons/pi";

function DetailKelas() {
  return (
    <>
    <Header/>
    <div className="wrapper" style={{backgroundColor:"#EBF3FC", height:"250px"}}>
      <div className='container'>
        <a className='d-flex' href="#" style={{textDecoration:"none", color:"black"}}>
        <FaArrowLeft style={{marginTop:"30px", marginBottom:"10px"}}/><p style={{margin:"0px", marginTop:"25px", fontWeight:"700", marginLeft:"15px", marginBottom:"10px"}}>Kelas Lainnya</p>
        </a>
        <p style={{margin:"0px"}}><a href='#' style={{margin:"0px", padding:"0px", textDecoration:"none", color: "#6148FF", fontSize:"15px", fontWeight:"800"}}>UI/UX Design</a></p>
        <h2 style={{fontWeight:"700", margin:"0px"}}><a href='#' style={{textDecoration:"none", color:"black"}}>Intro to Basic of User Interaction Design</a></h2>
        <p style={{fontWeight:"600", margin:"0px", marginTop:"5px"}}><a href='#' style={{textDecoration:"none", color:"black"}}>by Simon Doe</a></p>
      <div style={{display:"flex", justifyContent:"flex-start", gap:"5px", marginTop:"5px"}}>
        <RiShieldStarLine style={{color:"#73CA5C", marginTop:"5px"}}/>
        <p style={{margin:"0px"}}><a href='#' style={{textDecoration:"none", color: "#6148FF", fontSize:"14px", fontWeight:"600"}}>Beginner Level</a></p>
      </div>
      <button className='btn' style={{backgroundColor:"#73CA5C", borderRadius:"25px", height:"40px", padding:"5px", marginTop:"10px", width:"250px", fontWeight:"700", color:"white"}}>Join Grup Telegram<HiOutlineChatAlt2 style={{ marginLeft:"5px"}}/></button>
      </div>
    </div>
      <div className='container'>
        <div className="row">
          <div className="col-8">
            <div className='player'>
              <VideoPlayer />
            </div>
            <div style={{marginTop:"30px", marginBottom:"50px"}}>
              <h2 style={{fontWeight:"700", fontSize:"25px"}}>Tentang Kelas</h2>
              <p style={{fontWeight:"450", fontSize:"13px", lineHeight:"30px"}}>Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai platform. Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik. Disisi bisnis, design system sangat berguna dalam menghemat waktu dan biaya ketika mengembangkan suatu produk.<br /> 
              Bersama mentor XXX, kita akan mempelajari design system dari mulai manfaat, alur kerja pembuatannya, tools yang digunakan, hingga pada akhirnya, kita akan membuat MVP dari design system. Selain itu, mentor juga akan menjelaskan berbagai resource yang dibutuhkan untuk mencari inspirasi mengenai design system. <br />
              Kelas ini sesuai untuk Anda yang ingin memahami apa itu design system. Tidak hanya ditujukan untuk UI/UX Designer ataupun Developer, kelas ini sangat sesuai untuk stakeholder lain agar dapat memudahkan tim dalam bekerja sama. Yuk segera daftar dan kami tunggu di kelas ya!
              </p>
              <br />
              <h2 style={{fontWeight:"700", fontSize:"25px"}}>Kelas Ini Ditujukan Untuk</h2>
              <p style={{fontWeight:"450", fontSize:"13px", lineHeight:"30px"}}>
                1. Anda yang ingin memahami poin penting design system<br />
                2. Anda yang ingin membantu perusahaan lebih optimal dalam membuat design produk<br />
                3. Anda yang ingin latihan membangun design system<br />
                4. Anda yang ingin latihan membangun design system<br />
              </p>
            </div>
          </div>
          <div className="col-4" style={{height:"500px", backgroundColor:"white", borderRadius:"15px", marginTop:"-180px", boxShadow:"0 0 0 2px whitesmoke"}}>
            <div style={{margin:"15px"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <h2 style={{fontWeight:"700", fontSize:"22px"}}>Materi Belajar</h2>
                <BarProgress />
              </div>
              <p style={{marginTop:"10px"}}><a href='#' style={{margin:"0px", padding:"0px", textDecoration:"none", color: "#6148FF", fontSize:"15px", fontWeight:"700"}}>Chapter 1 - Pendahuluan</a></p>
              <ol style={{marginLeft:"-15px", marginTop:"18px"}}>
                <li style={{fontWeight:"400", fontSize:"15px", marginBottom:"20px"}}>Tujuan Mengikuti Kelas Design System<FaCirclePlay style={{marginLeft:"15px", color:"#73CA5C", width:"20px", height:"20px"}}/></li><hr />
                <li style={{fontWeight:"400", fontSize:"15px", marginBottom:"20px"}}>Tujuan Mengikuti Kelas Design System<FaCirclePlay style={{marginLeft:"15px", color:"#73CA5C", width:"20px", height:"20px"}}/></li><hr />
                <li style={{fontWeight:"400", fontSize:"15px", marginBottom:"20px"}}>Tujuan Mengikuti Kelas Design System<FaCirclePlay style={{marginLeft:"15px", color:"#73CA5C", width:"20px", height:"20px"}}/></li><hr />
                <li style={{fontWeight:"400", fontSize:"15px", marginBottom:"20px"}}>Tujuan Mengikuti Kelas Design System<FaCirclePlay style={{marginLeft:"15px", color:"#73CA5C", width:"20px", height:"20px"}}/></li><hr />
                <li style={{fontWeight:"400", fontSize:"15px", marginBottom:"20px"}}>Tujuan Mengikuti Kelas Design System<FaCirclePlay style={{marginLeft:"15px", color:"#6148FF", width:"20px", height:"20px"}}/></li><hr />
                <li style={{fontWeight:"400", fontSize:"15px", marginBottom:"20px"}}>Tujuan Mengikuti Kelas Design System<PiLockKeyFill style={{marginLeft:"15px", color:"#D9D9D9", width:"20px", height:"20px"}}/></li><hr />
              </ol>
            </div>
          </div>
        </div>
        
      </div>
    <Footer/>
    </>
  )
}

export default DetailKelas
