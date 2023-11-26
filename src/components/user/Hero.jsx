import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Heroes from "../../assets/hero.png"
import BgHero from "../../assets/bg-hero.png"

function Hero() {
  return (
    <Row>
            <Col style={{margin:"0px", padding:"0px"}}><img src={Heroes} alt="" /></Col>
            <div style={{position:"absolute", }}><img src={BgHero} alt="" />
            </div>
            <Col style={{backgroundColor:"#6148FF"}}>
            <div style={{marginTop:"70px", marginLeft:"50px", fontSize:"25px", fontWeight:"800", position:"absolute", width:"300px"}}>
                <h1 style={{fontSize:"30px", fontWeight:"600", color:"#FFFFFF"}}>Belajar dari Praktisi Terbaik!</h1>
                <button style={{width: "250px", height: "40px", color:"#6148FF", backgroundColor:"white", fontWeight:"700", borderRadius: "15px"}} className='btn btn-primary'>IKUTI KELAS</button>
            </div>
            </Col>
        </Row>
  )
}

export default Hero
