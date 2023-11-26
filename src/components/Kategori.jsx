import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import background from "../assets/kategori.png";

function Kategori() {
  return (
    <div style={{backgroundColor:"#EBF3FC"}}>

        <div className='container' style={{paddingBottom:"30px"}}>
        <div className='d-flex' style={{justifyContent:"space-between", paddingTop:"20px", paddingBottom:"20px"}}>
            <h1 style={{fontSize:"25px", fontWeight:"700"}}>Kategori Belajar</h1>
            <p><a href='#' style={{textDecoration:"none", color: "#6148FF", fontSize:"15px", fontWeight:"800"}}>Lihat Semua </a></p>
        </div>
                <Row xs={1} md={6} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <a href="#" style={{textDecoration:"none", color:"black"}}>
                        <Card.Img variant="top" src={background}/>
                        <Card.Title style={{textAlign:"center", fontSize:"15px", fontWeight:"700", paddingTop:"5px"}}>UI/UX Design</Card.Title>
                        </a>
                    </Col>
                ))}
                </Row>
        </div>
    </div>
  );
}

export default Kategori;