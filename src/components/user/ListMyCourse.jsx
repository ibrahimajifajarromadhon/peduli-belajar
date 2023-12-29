import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import getMyCourse from "../../api/getMyCourse";

const ListMyCourse = ({ progressButton, listMyCourse }) => {
  const [progresCourse, setProgresCourse] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("search", searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyCourse();
        setProgresCourse(response);
      } catch (error) {
        console.log("gagal fetch api", error.message);
      }
    };

    if (
      listMyCourse &&
      Array.isArray(listMyCourse) &&
      listMyCourse.length >= 0
    ) {
      setProgresCourse(listMyCourse);
    } else {
      fetchData();
    }
  }, [progressButton, listMyCourse]);

  const filterCourses = () => {
    if (!searchQuery) {
      if (progressButton === "all") {
        return progresCourse;
      } else if (progressButton === "in_progress") {
        return progresCourse.filter(
          (course) => course.percentProgress > 0 && course.percentProgress < 100
        );
      } else if (progressButton === "done") {
        return progresCourse.filter((course) => course.percentProgress === 100);
      } else {
        return [];
      }
    } else {
      return progresCourse.filter((course) => {
        const titleMatch = course.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const progressMatch =
          progressButton === "all" ||
          (progressButton === "in_progress" &&
            course.percentProgress > 0 &&
            course.percentProgress < 100) ||
          (progressButton === "done" && course.percentProgress === 100);

        return titleMatch && progressMatch;
      });
    }
  };

  const handleClick = (course) => {
    console.log(course.courseCode);
    navigate(`/detailClass/${course.courseCode}`);
  };

  const filteredCourses = filterCourses();

  return (
    <div
      className="row row-cols-1 row-cols-md-2 g-4 p-2"
      style={{ overflowX: "auto" }}
    >
      {filteredCourses.length === 0 ? (
        <div className="col">
          <i>
            <p style={{ fontFamily: "Montserrat", fontWeight: "600" }}>
              No search results found.
            </p>
          </i>
        </div>
      ) : (
        filteredCourses.map((course) => (
          <div className="col" key={course.courseCode}>
            <div
              className="mycourse card"
              style={{ borderRadius: "22px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="d-flex justify-content-center align-items-center" style={{ borderRadius: "22px" }}>
                <img
                  src={course.category.categoryImage}
                  className="card-img-top"
                  style={{
                    marginTop: "15px",
                    padding: "0px",
                    width: "35%",
                    height: "45%",
                  }}
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="d-flex">
                    <h5
                      className="card-title"
                      style={{fontFamily:"Montserrat", fontWeight:"700", color: "#6148FF" }}
                    >
                      {course.category.categoryName.replace(/_/g, " ")}
                    </h5>
                    <div className="ms-auto" style={{fontFamily:"Montserrat", fontWeight:"600"}}>
                      <FaStar style={{ color: "#F9CC00" }} /> {course.rating}
                    </div>
                  </div>
                  <h6 style={{fontFamily:"Montserrat", fontWeight:"700"}}>{course.title}</h6>
                <p
                  className="card-text"
                  style={{fontFamily:"Montserrat", fontWeight:"500", fontSize:"14px"}}
                >
                  by {course.teacher}
                </p>
                <div className="d-flex mt-2" style={{fontFamily:"Montserrat"}}>
                  <RiShieldStarLine style={{ color: "#73CA5C" }} />{" "}
                  <p
                    style={{
                      textDecoration: "none",
                      color: "#6148FF",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {course.level} LEVEL
                  </p>
                  <RiBook3Line
                    style={{ color: "#73CA5C", marginLeft: "15px" }}
                  />{" "}
                  <p
                    style={{
                      textDecoration: "none",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {course.modul} Modul
                  </p>
                  <RiTimeFill
                    style={{ color: "#73CA5C", marginLeft: "15px" }}
                  />{" "}
                  <p
                    style={{
                      textDecoration: "none",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    100 menit
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center" style={{fontFamily: "Montserrat"}}>
                  <button
                      className="btn btn-kelas"
                      onClick={() => handleClick(course)}
                      >
                      Lanjutkan
                    </button>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Info example"
                    aria-valuenow={course.percentProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ borderRadius: "25px", height:"1.8em" }}
                  >
                    <div
                      className="progress-bar text-white px-1"
                      style={{
                        width: `${course.percentProgress}%`,
                        fontWeight: "600",
                        backgroundColor: "#6148FF",
                        borderRadius: "25px",
                      }}
                    >
                      <div style={{ padding: "0px 20px 0px 20px" }}>
                      {`${course.percentProgress}% complete `}
                      </div>
                    </div>
                </div>
                </div>
                
              </div>
            </div>
            <style>{`
            .mycourse {
              transition: transform 0.3s; 
            }
    
            .mycourse:hover {
              transform: scale(1.02);
            }

            .btn-kelas  {
              padding: 5px;
              background-color: #489CFF;
              color: white;
              border-radius: 25px;
              width: 40%;
              font-weight: 600;
            }
    
            .btn-kelas:hover {
              background-color: #6148FF;
              color: white;
            }

            .card-img-top {
              width: 100%;
              height: 150px;
            }
            `}</style>
          </div>
        ))
      )}
    </div>
  );
};

export default ListMyCourse;
