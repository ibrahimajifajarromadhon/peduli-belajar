// import React, { useEffect, useState } from "react";
// import TableAdmin from "../components/TableAdmin";
// import getAllCourses from "../api/getAllCourse";

// function ManageClassAdmin() {
//   const [courses, setCourses] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getAllCourses();

//         if (Array.isArray(response.data.data)) {
//           setCourses(response.data.data);
//         } else {
//           console.error("Received data is not an array:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching courses:", error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!courses || courses.length === 0) {
//     return (
//       <p
//         style={{ color: `var(--primary-purple)`, fontWeight: "700" }}
//         className="text-center"
//       >
//         Loading...
//       </p>
//     );
//   }

//   const data = courses.map((course) => ({
//     Kode_Kelas: course.courseCode,
//     Kategory: course.category,
//     Nama_Kelas: course.title,
//     Type_Kelas: course.type,
//     Level: course.level,
//     Harga: course.price,
//   }));

//   return (
//     <>
//       <TableAdmin
//         data={data}
//         coloredColumn={{
//           positive: "--allert-green",
//           negative: "--primary-purple",
//           column: { key: "Type_Kelas", value: ["GRATIS", "PREMIUM"] },
//         }}
//       />
//     </>
//   );
// }

// export default ManageClassAdmin;
import React, { useEffect, useState } from "react";
import TableAdmin from "../components/TableAdmin";
import getAllCourses from "../api/getAllCourse";

function ManageClassAdmin() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCourses({
          page:2,
          size: 3,
          category: ["UIUX_DESIGN", "DATA_SCIENCE", "WEB_DEVELOPMENT"],
          level: ["BEGINNER", "INTERMEDIATE", "ADVANCE"],
          type: ["GRATIS", "PREMIUM"],
          title: "YourTitleHere",
        });

        if (response.status === 200 && response && Array.isArray(response.data.data.courses)) {
          // Append new courses to existing courses
          setCourses((prevCourses) => [...prevCourses, ...response.data.data.courses]);
          const data = response.data.data.courses;
          console.log(data)
        } else {
          setError("No courses found.");
        }
      } catch (error) {
        setError(`Error fetching courses: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]); // Trigger fetchData when the 'page' value changes

  // Handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 200) {
      // Load more data when user is close to the bottom (adjust 200 to your preference)
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Ensure to remove the event listener when the component unmounts

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
    Kategory: course.category,
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
