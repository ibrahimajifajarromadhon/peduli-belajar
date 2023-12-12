import React, { useEffect, useState } from 'react';
import getAllCourses from '../api/getAllCourse';

function TestAPI() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCourses();
        
        // Memeriksa apakah data yang diterima adalah array
        if (Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          console.error('Received data is not an array:', coursesData);
        }
      } catch (error) {
        console.error('Error fetching courses:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Courses</h1>
      {courses.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.courseCode}>
              <h2>{course.name}</h2>
              <p>{course.description}</p>
              <p>Author: {course.author}</p>
              <p>Price: {course.price}</p>
              <h3>Chapters:</h3>
              <ul>
                {course.chapter.map((chapter) => (
                  <li key={chapter.chapterNo}>
                    <h4>{chapter.chapterTitle}</h4>
                    <h5>Subjects:</h5>
                    <ul>
                      {chapter.subject.map((subject) => (
                        <li key={subject.subjectNo}>
                          <p>{subject.videoTitle}</p>
                          <p>Type: {subject.subjectType}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TestAPI;
