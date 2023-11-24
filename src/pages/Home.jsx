import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Img from "../assets/image.png";
import Kategori from '../components/Kategori';
import { RiShieldStarLine } from "react-icons/ri";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { IoDiamond } from "react-icons/io5";

function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Kategori />
    <div className='container'>
        <div className='d-flex' style={{justifyContent:"space-between", paddingTop:"20px", paddingBottom:"20px"}}>
            <h1 style={{fontSize:"25px", fontWeight:"700"}}>Kursus Popular</h1>
            <p><a href='#' style={{textDecoration:"none", color: "#6148FF", fontSize:"15px", fontWeight:"800"}}>Lihat Semua </a></p>
        </div>
        <button className='btn' style={{borderRadius:"25px", backgroundColor:"#E8F1FF", fontSize:"15px", fontWeight:"700", marginRight:"10px"}}>All</button>
        <button className='btn' style={{borderRadius:"25px", backgroundColor:"#E8F1FF", fontSize:"15px", fontWeight:"700", marginRight:"10px"}}>Data Science</button>
        <button className='btn' style={{borderRadius:"25px", backgroundColor:"#E8F1FF", fontSize:"15px", fontWeight:"700", marginRight:"10px"}}>Web Development</button>
        <Row xs={1} md={3} className="g-4 mb-5">
        {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
            <Card style={{borderRadius:"25px", marginTop:"20px"}}>
                <Card.Img variant="top" src={Img} style={{margin:"0px", padding:"0px"}}/>
                <Card.Body>
                <p><a href='#' style={{margin:"0px", padding:"0px", textDecoration:"none", color: "#6148FF", fontSize:"15px", fontWeight:"800"}}>UI/UX Design</a></p>
                <Card.Title style={{fontWeight:"700"}}>Belajar Web Designer dengan Figma</Card.Title>
                <Card.Text style={{fontWeight:"600"}}>by John Doe</Card.Text>
                <div style={{display:"flex", justifyContent:"flex-start", gap:"5px"}}>
                <RiShieldStarLine style={{color:"#73CA5C", marginTop:"5px"}}/><p><a href='#' style={{textDecoration:"none", color: "#6148FF", fontSize:"12px", fontWeight:"600"}}>Intermediate Level</a></p>
                </div>
                <button className='btn' style={{width:"200px",borderRadius:"30px", backgroundColor:"#489CFF", fontSize:"15px", fontWeight:"700", marginRight:"10px", color:"#EBF3FC", padding:"5px"}}><IoDiamond style={{marginRight:"50px"}} /> Rp 249.000</button>
                </Card.Body>
                
            </Card>
            </Col>
        ))}
        </Row>

    </div>
    <Footer/>

    </>
  );
}

export default Home;