import React from 'react';
import { Card } from 'react-bootstrap';
import Icon from "../assets/icon.svg"
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
    <div className="activity-container py-4 mb-4">
      <div className="card bg-warning-subtle">
      <Card style={{ ...cardStyle, backgroundColor: 'var(--primary-blue)' }}>
        <div className="row g-5">
          <div className="col-md-4 d-flex align-items-center">
            <Card.Img src={Icon} className="img-fluid rounded-start" style={iconStyle} />
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
      </div>
      <div className="card bg-danger-subtle">
      <Card style={{ ...cardStyle, backgroundColor: 'var(--allert-green)' }}>
        <div className="row g-5">
          <div className="col-md-4 d-flex align-items-center">
            <Card.Img src={Icon} className="img-fluid rounded-start" style={iconStyle} />
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
      </div>
      <div className="card bg-success-subtle">
      <Card style={{ ...cardStyle, backgroundColor: 'var(--primary-purple)' }}>
        <div className="row g-5">
          <div className="col-md-4 d-flex align-items-center">
            <Card.Img src={Icon} className="img-fluid rounded-start" style={iconStyle} />
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

      <style jsx>{`
        .activity-container {
          display: flex;
          justify-content: space-around;
          padding: 24px;
          gap: 1em;
        }

        @media (max-width: 992px) {
          .activity-container {
            padding-top: 0 !important; 
          }
        }
        .card {
          width: 15em;
          height: 108px;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      </div>
  );
};

export default UsersActivity;

 