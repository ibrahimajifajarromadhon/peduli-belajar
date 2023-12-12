import React, { useEffect, useState } from "react";
import { createClass } from "../api/createClass";


function TestCreateAPI() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = {
          name: "Belajar Dasar Laravel",
          courseCode: "Web Development",
          category: "WB1105",
          type: "GRATIS",
          level: "Beginner",
          price: 0,
          description: "Bersama tentor Talia kita akan memahami lARAVEL",
          author: "Talia",
          chapter: [
            {
              chapterNo: 1,
              chapterTitle: "Pendahuluan",
              subject: [
                {
                  subjectNo: 1,
                  videoTitle: "Apa itu Laravel ?",
                  videoLink: "https://youtu.be/ixOd42SEUF0",
                  subjectType: {
                    name: "FREE",
                  },
                },
              ],
            },
          ],
        };

        const data = await createClass(requestData);
        setApiData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error.message);
        setError(error.message); // Set the error state
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        {error && <p>Error: {error}</p>}
        {apiData && (
          <div>
            <h1>{apiData.name}</h1>
            {/* Tambahkan elemen JSX lainnya sesuai kebutuhan */}
          </div>
        )}
      </div>
    </div>
  );
}

export default TestCreateAPI;
