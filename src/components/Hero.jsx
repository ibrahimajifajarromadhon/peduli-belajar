import React from 'react';
import Heroes from "../assets/hero.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgHero from '../assets/bg-hero.png'

const Hero = () => {
  return (
    <>
        <Row>
            <Col style={{margin:"0px", padding:"0px"}}><img src={Heroes} alt="" /></Col>
            <div style={{position:"absolute", }}><img src={bgHero} alt="" />
            </div>
            <Col style={{backgroundColor:"#6148FF"}}>
            <div style={{marginTop:"70px", marginLeft:"50px", fontSize:"25px", fontWeight:"800", position:"absolute", width:"300px"}}>
                <h1 style={{fontSize:"30px", fontWeight:"600", color:"#FFFFFF"}}>Belajar <br /> dari Praktisi Terbaik!</h1>
                <button style={{width: "250px", height: "40px", color:"#6148FF", backgroundColor:"white", fontWeight:"700", borderRadius: "15px"}} className='btn btn-primary'>IKUTI KELAS</button>
            </div>
            </Col>
        </Row>
    </>
  );
};

export default Hero;

