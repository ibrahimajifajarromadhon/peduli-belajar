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
        console.log("error fetching data", error.message)
      }
    };
    fetchData();
  },[]);

  const cardStyle = {
    maxWidth: "100%",
    marginBottom: "1em",
  };

  const textStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
  };

  const iconStyle = {
    width: "50px",
    height: "50px",
  };

  return (
    <div className="activity-container py-4">
      <Card style={{ ...cardStyle, backgroundColor: "var(--primary-blue)" }}>
        <div className="d-flex flex-row">
          <div className="d-flex align-items-center">
            <Card.Img
              src={Icon}
              className="img-fluid rounded-start"
              style={iconStyle}
            />
          </div>
          <div className="">
            <Card.Body>
              <Card.Title style={textStyle}>{userData ? userData : "Loading..."}</Card.Title>
              <Card.Text style={textStyle}>Active Users</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card style={{ ...cardStyle, backgroundColor: "var(--allert-green)" }}>
        <div className="d-flex flex-row">
          <div className="d-flex align-items-center">
            <Card.Img
              src={Icon}
              className="img-fluid rounded-start"
              style={iconStyle}
            />
          </div>
          <div className="">
            <Card.Body>
              <Card.Title style={textStyle}>{totalData ? totalData : "Loading..."}</Card.Title>
              <Card.Text style={textStyle}>Active Class</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card style={{ ...cardStyle, backgroundColor: "var(--primary-purple)" }}>
        <div className="d-flex flex-row">
          <div className="col-md-4 d-flex align-items-center">
            <Card.Img
              src={Icon}
              className="img-fluid rounded-start"
              style={iconStyle}
            />
          </div>
          <div className="col-md-9">
            <Card.Body>
              <Card.Title style={textStyle}>{premiumData ? premiumData : "Loadiing..."}</Card.Title>
              <Card.Text style={textStyle}>Premium Class</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <style>{`
        .activity-container {
          display: flex;
          justify-content: space-between;
          padding: 24px;
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
        }
      `}</style>
    </div>
  );
};

export default UsersActivity;
