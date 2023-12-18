import React, { useEffect, useState } from "react";
import getDetailCourse from "../api/getDetailsCourse";
import updateCourse from "../api/updateCorse";

function UpdateCourse({ courseCode, showModal }) {
  const [isPriceDisabled, setIsPriceDisabled] = useState(false);
  const [getDetail, setGetDetail] = useState();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async (courseCode) => {
      try {
        const response = await getDetailCourse(courseCode);
        setGetDetail(response);
      } catch (error) {
        console.log("error fetch data", error.message);
        throw error;
      }
    };
    fetchData(courseCode);
  }, [courseCode]);

  const handleUpdate = async () => {
    try {
      const updatedClass = {
        title: getDetail.data.title,
        courseCode: getDetail.data.courseCode,
        category: { 
          categoryName: getDetail.data.category.categoryName ||"",
        },
        type: getDetail.data.type,
        level: getDetail.data.level,
        price: getDetail.data.price,
        description: getDetail.data.description,
        teacher: getDetail.data.teacher,
        chapter: getDetail.data.chapter.map((chapter) => ({
          chapterNo: chapter.chapterNo,
          chapterTitle: chapter.chapterTitle,
          subject: chapter.subject.map((subject) => ({
            subjectNo: subject.subjectNo,
            videoTitle: subject.videoTitle,
            videoLink: subject.videoLink,
            subjectType: subject.subjectType,
          })),
        })),
      };

      await updateCourse(courseCode, updatedClass);
      console.log("berhasil mengupdate");
    } catch (error) {
      console.log("error mengupdate", error.message);
    }
  };

  const handleInputChange = (field, value) => {
    if (isEditing) {
      setGetDetail((prevDetail) => ({
        ...prevDetail,
        data: {
          ...prevDetail.data,
          [field]: value,
        },
      }));
    }
  };

  // const handleChapterInputChange = (
  //   field,
  //   value,
  //   chapterIndex,
  //   subjectIndex
  // ) => {
  //   if (isEditing) {
  //     setGetDetail((prevDetail) => {
  //       const updatedChapters = [...prevDetail.data.chapter];
  //       if (chapterIndex !== undefined && subjectIndex !== undefined) {
  //         updatedChapters[chapterIndex].subject[subjectIndex][field] = value;
  //       } else if (chapterIndex !== undefined) {
  //         if (field === 'category') {
  //           updatedChapters[chapterIndex][field].categoryName = value;
  //         } else {
  //           updatedChapters[chapterIndex][field] = value;
  //         }
  //         updatedChapters[chapterIndex][field] = value;
  //       }
  //       return {
  //         ...prevDetail,
  //         data: {
  //           ...prevDetail.data,
  //           chapter: updatedChapters,
  //         },
  //       };
  //     });
  //   }
  // };

  const handleChapterInputChange = (
    field,
    value,
    chapterIndex,
    subjectIndex
  ) => {
    if (isEditing) {
      setGetDetail((prevDetail) => {
        console.log(prevDetail);
        const updatedChapters = [...prevDetail.data.chapter];
        if (chapterIndex !== undefined && subjectIndex !== undefined) {
          updatedChapters[chapterIndex].subject[subjectIndex][field] = value;
        } else if (chapterIndex !== undefined) {
            updatedChapters[chapterIndex][field] = value;
        }
        return {
          ...prevDetail,
          data: {
            ...prevDetail.data,
            chapter: updatedChapters,
          },
        };
      });
    }
  };
  

  const toggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  if (!getDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="" style={{ backgroundColor: `var(--primary-young-blue)` }}>
      <div>
        <button onClick={toggleEdit}>
          {isEditing ? "Cancel Edit" : "Edit"}
        </button>
        {isEditing && (
          <button onClick={handleUpdate}>
            Update
          </button>
        )}
        <h1>
          <input
            type="text"
            value={getDetail.data.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            readOnly={!isEditing}
          />
        </h1>
        <p>
          <textarea
            value={getDetail.data.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            readOnly={!isEditing}
          />
        </p>
        Category: {" "}
        <select name="" id=""></select>

        <p>

        </p>
        <p>
          Teacher:{" "}
          <input
            type="text"
            value={getDetail.data.teacher}
            onChange={(e) => handleInputChange("teacher", e.target.value)}
            readOnly={!isEditing}
          />
        </p>
        <p>
          Level:{" "}
          <select
            value={getDetail.data.level}
            onChange={(e) => handleInputChange("level", e.target.value)}
            readOnly={!isEditing}
          >
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCE">Advance</option>
          </select>
        </p>
        <p>
          Price:{" "}
          <input
            type="number"
            value={getDetail.data.price}
            onChange={(e) => handleInputChange("price", e.target.value)}
            readOnly={!isEditing}
          />
        </p>
        <h2>Chapters</h2>
        {getDetail.data.chapter.map((chapter, chapterIndex) => (
          <div key={chapter.id}>
            <h3>
              <input
                type="text"
                value={chapter.chapterTitle}
                onChange={(e) =>
                  handleChapterInputChange(
                    "chapterTitle",
                    e.target.value,
                    chapterIndex
                  )
                }
                readOnly={!isEditing}
              />
            </h3>
            <h4>Subjects</h4>
            {chapter.subject.map((subject, subjectIndex) => (
              <div key={subject.id}>
                <p>
                  <input
                    type="text"
                    value={subject.videoTitle}
                    onChange={(e) =>
                      handleChapterInputChange(
                        "videoTitle",
                        e.target.value,
                        chapterIndex,
                        subjectIndex
                      )
                    }
                    readOnly={!isEditing}
                  />
                </p>
                <p>
                  Video Link:{" "}
                  <input
                    type="text"
                    value={subject.videoLink}
                    onChange={(e) =>
                      handleChapterInputChange(
                        "videoLink",
                        e.target.value,
                        chapterIndex,
                        subjectIndex
                      )
                    }
                    readOnly={!isEditing}
                  />
                </p>
                <p>
                  Subject Type:{" "}
                  <select
                    value={subject.subjectType}
                    onChange={(e) =>
                      handleChapterInputChange(
                        "subjectType",
                        e.target.value,
                        chapterIndex,
                        subjectIndex
                      )
                    }
                    readOnly={!isEditing}
                  >
                    <option value="GRATIS">Gratis</option>
                    <option value="PREMIUM">Premium</option>
                  </select>
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpdateCourse;
