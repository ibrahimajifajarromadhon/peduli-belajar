import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Background from "../../assets/kategori.png"

function Category() {
  return (
    <div style={{backgroundColor: `var(--primary-young-blue)`}}>
      <div className='container' style={{paddingBottom:"30px"}}>
        <div className='d-flex' style={{justifyContent:"space-between", paddingTop:"20px", paddingBottom:"20px"}}>
            <h1 style={{fontSize:"25px", fontWeight:"700"}}>Kategori Belajar</h1>
            <p><a href='#' style={{textDecoration:"none", color: `var(--primary-purple)`, fontSize:"15px", fontWeight:"800"}}>Lihat Semua </a></p>
        </div>
                <Row xs={1} md={6} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <a href="#" style={{textDecoration:"none", color:"black"}}>
                        <Card.Img variant="top" src={Background} />
                        <Card.Title style={{textAlign:"center", fontSize:"15px", fontWeight:"700", paddingTop:"5px"}}>UI/UX Design</Card.Title>
                        </a>
                    </Col>
                ))}
                </Row>
        </div>
    </div>
  )
}

export default Category
