import React, { useEffect, useState } from "react";
import TableAdmin from "../components/TableAdmin";
import getAllCourses from "../api/getAllCourse";

function ManageClassAdmin() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCourses();

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

  if (!courses || courses.length === 0) {
    return (
      <p
        style={{ color: `var(--primary-purple)`, fontWeight: "700" }}
        className="text-center"
      >
        Loading...
      </p>
    ); 
  }

  const data = courses.map((course) => ({
    Kode_Kelas: course.courseCode,
    Kategory: course.category,
    Nama_Kelas: course.title,
    Type_Kelas: course.type,
    Level: course.level,
    Harga: course.price,
  }));

  return (
    <>
      <TableAdmin data={data} coloredColumn={{positive: "--allert-green", negative: "--primary-purple", column: {key: "Type_Kelas", value: ["GRATIS", "PREMIUM"]} }} />
    </>
  );
}

export default ManageClassAdmin;
