import React, { useEffect, useState } from "react";
import TableAdmin from "../components/TableAdmin";
import getAllCourses from "../api/getAllCourse";

function ManageClassAdmin({ filter }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCourses();
        setCourses(response.data);
      } catch (error) {
        setError(`Error fetching courses: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const filterCourses = () => {
    if (filter === "kelas-premium") {
      return courses.filter((course) => course.type === "PREMIUM");
    } else if (filter === "kelas-gratis") {
      return courses.filter((course) => course.type === "GRATIS");
    } else {
      return courses;
    }
  };

  if (loading) {
    return (
      <p
        style={{ color: `var(--primary-purple)`, fontWeight: "700" }}
        className="text-center"
      >
        Loading...
      </p>
    );
  }
  const filteredCourses = filterCourses();

  if (!filteredCourses || filteredCourses.length === 0) {
    return (
      <p
        style={{ color: `var(--primary-purple)`, fontWeight: "700" }}
        className="text-center"
      >
        No courses found.
      </p>
    );
  }

  const data = filteredCourses.map((course) => ({
    Kode_Kelas: course.courseCode,
    Kategori: course.category.categoryName,
    Nama_Kelas: course.title,
    Tipe_Kelas: course.price === 0 ? "GRATIS" : "PREMIUM",
    Level: course.level,
    Harga_Kelas: course.price,
  }));

  return (
    <>
      <div
        className="col-5"
        style={{
          marginTop: "-50px",
          marginLeft: "10px",
          fontFamily: "Montserrat",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Kelola Kelas
        </h4>
      </div>
      <style>{`
      @media (max-width: 920px) {
        h4{
          display: none;
        }
        .col-5{
        }
      }
      `}</style>
      <TableAdmin
        data={data}
        coloredColumn={{
          positive: "--allert-green",
          negative: "--primary-purple",
          column: { key: "Tipe_Kelas", value: ["GRATIS", "PREMIUM"] },
        }}
      />
    </>
  );
}

export default ManageClassAdmin;
