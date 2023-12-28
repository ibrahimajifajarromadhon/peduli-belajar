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
              style={{
                borderRadius: "22px",
                width: "100%",
                height: "18rem",
                cursor: "pointer",
                overflow: "hidden",
              }}
              onClick={() => handleClick(course)}
            >
              <div className="d-flex justify-content-center align-items-center m-3">
                <img
                  src={course.category.categoryImage}
                  className="card-img-top"
                  style={{
                    position: "center",
                    width: "20%",
                    height: "100%",
                  }}
                  alt="..."
                />
              </div>
              <div className="card-body" style={{ padding: "0em 1em" }}>
                <div className="d-flex">
                  <div>
                    <h5
                      className="card-title"
                      style={{ color: "#6148FF", fontSize: "1em" }}
                    >
                      {course.category.categoryName.replace(/_/g, " ")}
                    </h5>
                    <h3 style={{ fontSize: "1em" }}>{course.title}</h3>
                  </div>
                  <div className="ms-auto">
                    <FaStar style={{ color: "#F9CC00" }} /> {course.rating}
                  </div>
                </div>
                <p
                  className="card-text py-0 my-0"
                  style={{ fontSize: "0.8em" }}
                >
                  by {course.teacher}
                </p>
                <div className="d-flex my-1" style={{ height: "1.5em" }}>
                  <RiShieldStarLine style={{ color: "#73CA5C" }} />{" "}
                  <p
                    style={{
                      textDecoration: "none",
                      color: "#6148FF",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {course.level} LEVEL
                  </p>
                  <RiBook3Line
                    style={{ color: "#73CA5C", marginLeft: "30px" }}
                  />{" "}
                  <p
                    style={{
                      textDecoration: "none",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {course.modul} Modul
                  </p>
                  <RiTimeFill
                    style={{ color: "#73CA5C", marginLeft: "30px" }}
                  />{" "}
                  <p
                    style={{
                      textDecoration: "none",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    100 menit
                  </p>
                </div>
                <div className="" style={{ marginTop: "1em" }}>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Info example"
                    aria-valuenow={course.percentProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar text-white px-1"
                      style={{
                        backgroundColor: `var(--primary-purple)`,
                        width: `${course.percentProgress}%`,
                        fontWeight: "600",
                      }}
                    >
                      {`${course.percentProgress}% complete `}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style>{`
            .mycourse:hover {
              box-shadow: 4px 4px 8px rgba(var(--primary-purple-rgb), 0.5);
              transform: scale(1.02); /* Efek membesar saat dihover */
              transition: background-color 0.3s, transform 0.3s; /* Animasi perubahan warna dan transformasi */
            }
           
            `}</style>
          </div>
        ))
      )}
    </div>
  );
};

export default ListMyCourse;
