import React, { useEffect, useState } from "react";
import TableAdmin from "../components/TableAdmin";
import getAllCourses from "../api/getAllCourse";

function ManageClassAdmin() {
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
  }, []);


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

  if (error) {
    return (
      <p
        style={{ color: `var(--primary-purple)`, fontWeight: "700" }}
        className="text-center"
      >
        {error}
      </p>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <p
        style={{ color: `var(--primary-purple)`, fontWeight: "700" }}
        className="text-center"
      >
        No courses found.
      </p>
    );
  }

  const data = courses.map((course) => ({
    Kode_Kelas: course.courseCode,
    Kategory: course.category.categoryName,
    Nama_Kelas: course.title,
    Type_Kelas: course.price === 0 ? "GRATIS" : "PREMIUM",
    Level: course.level,
    Harga: course.price,
  }));

  return (
    <>
      <TableAdmin
        data={data}
        coloredColumn={{
          positive: "--allert-green",
          negative: "--primary-purple",
          column: { key: "Type_Kelas", value: ["GRATIS", "PREMIUM"] },
        }}
      />
    </>
  );
}

export default ManageClassAdmin;
