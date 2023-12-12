import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Icon from "../assets/icon.svg";
import getAllCourses from "../api/getAllCourse";

const UsersActivity = () => {
  const [courses, setCourses] = useState([]);
  const [freeCourseCount, setFreeCourse] = useState(0);
  const [premiumCourseCount, setPremiumCourse] = useState(0);

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCourses();

        const freeCourse = response.data.filter(
          (course) => course.type && course.type.toUpperCase() === "GRATIS"
        ).length;

        const premiumCourse = response.data.filter(
          (course) => course.type && course.type.toUpperCase() === "PREMIUM"
        ).length;

        setFreeCourse(freeCourse);
        setPremiumCourse(premiumCourse);
        if (Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          console.error("Received data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };
    fetchData();
  }, []);

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
              <Card.Title style={textStyle}>450</Card.Title>
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
              <Card.Title style={textStyle}>{freeCourseCount}</Card.Title>
              <Card.Text style={textStyle}>Free Class</Card.Text>
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
          <div className="col-md-8">
            <Card.Body>
              <Card.Title style={textStyle}>{premiumCourseCount}</Card.Title>
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
            gap: 0.5em;
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
