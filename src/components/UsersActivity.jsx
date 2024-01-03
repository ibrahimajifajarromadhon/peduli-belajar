import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Icon from "../assets/icon.svg";
import activeUser from "../api/activeUser";
import premiumClass from "../api/premiumClass";
import totalClass from "../api/totalClass";

const UsersActivity = () => {
  const [userData, setUserData] = useState(null);
  const [premiumData, setPremiumData] = useState(null);
  const [totalData, setTotalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await activeUser();
        setUserData(response.data);

        const premiumResponse = await premiumClass();
        setPremiumData(premiumResponse.data);

        const totalResponse = await totalClass();
        setTotalData(totalResponse.data)
      }catch (error) {
        throw error;
      }
    };
    fetchData();
  },[]);

  return (
    <div className="activity-container">
      <Card style={{ backgroundColor: "var(--primary-blue)", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}>
        <div className="d-flex flex-row">
          <div className="d-flex align-items-center">
            <Card.Img
              src={Icon}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="">
            <Card.Body>
              <Card.Title className="title-aktif">{userData ? userData : "..."}</Card.Title>
              <Card.Text className="text-aktif">Active Users</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card style={{  backgroundColor: "var(--allert-green)", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}>
        <div className="d-flex flex-row">
          <div className="d-flex align-items-center">
            <Card.Img
              src={Icon}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="">
            <Card.Body>
              <Card.Title className="title-aktif">{totalData ? totalData : "..."}</Card.Title>
              <Card.Text className="text-aktif">Active Class</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card style={{  backgroundColor: "var(--primary-purple)", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}>
        <div className="d-flex flex-row">
          <div className="d-flex align-items-center">
            <Card.Img
              src={Icon}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="">
            <Card.Body>
              <Card.Title className="title-aktif">{premiumData ? premiumData : "..."}</Card.Title>
              <Card.Text className="text-aktif">Premium Class</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <style>{`
        .title-aktif {
          font-family: Montserrat;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
        }

        .text-aktif {
          font-family: Montserrat;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }

        .activity-container {
          display: flex;
          justify-content: space-between;
          padding:  20px 24px 0px  24px;
          gap: 1em;
        }

        .card {
          width: 50%;
          height: 108px;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 992px) {
          .activity-container {
            padding-top: 0 !important;
          }
        }

        @media (max-width: 628px) {
          .activity-container {
            gap: 0.5em !important;
          }
          .card {
            width: 100%;
          }
          .img-fluid {
            display: none;
          }
          .text-aktif {
            font-size : 0.8rem !important;
          }
          .title-aktif {
            display : flex;
            font-size: 0.8rem;
          }
        }        
      `}</style>
    </div>
  );
};

export default UsersActivity;
