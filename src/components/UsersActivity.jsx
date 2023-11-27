import React from 'react';
import { Card } from 'react-bootstrap';
import icon from '../assets/icon.svg';

const UsersActivity = () => {
  const cardStyle = {
    maxWidth: '600px',
    paddingLeft: '20px',
    paddingRight: '10px'
  };

  const textStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
  };

  const iconStyle = {
    width: '50px',
    height: '50px',
  };

  return (
    <div className="d-flex justify-content-around card-container">
      <Card style={{ ...cardStyle, backgroundColor: 'var(--primary-blue)' }}>
        <div className="row g-5">
          <div className="col-md-4 d-flex align-items-center">
            <Card.Img src={icon} className="img-fluid rounded-start" style={iconStyle} />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title style={textStyle}>450</Card.Title>
              <Card.Text style={textStyle}>
                Active Users
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card style={{ ...cardStyle, backgroundColor: 'var(--allert-green)' }}>
        <div className="row g-5">
          <div className="col-md-4 d-flex align-items-center">
            <Card.Img src={icon} className="img-fluid rounded-start" style={iconStyle} />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title style={textStyle}>25</Card.Title>
              <Card.Text style={textStyle}>
                Active Class
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card style={{ ...cardStyle, backgroundColor: 'var(--primary-purple)' }}>
        <div className="row g-5">
          <div className="col-md-4 d-flex align-items-center">
            <Card.Img src={icon} className="img-fluid rounded-start" style={iconStyle} />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title style={textStyle}>20</Card.Title>
              <Card.Text style={textStyle}>
                Premium Class
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UsersActivity;
