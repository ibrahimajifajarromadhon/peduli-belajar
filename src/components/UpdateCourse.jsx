// import React, { useEffect, useState } from "react";
// import getDetailCourse from "../api/getDetailsCourse";
// import updateCourse from "../api/updateCorse";
// import { toast } from "react-toastify";

// function UpdateCourse({ courseCode }) {
//   const [getDetail, setGetDetail] = useState();
//   const [isEditing, setIsEditing] = useState(false);
//   const [isPriceDisabled, setIsPriceDisabled] = useState(false);

//   useEffect(() => {
//     const fetchData = async (courseCode) => {
//       try {
//         const response = await getDetailCourse(courseCode);
//         setGetDetail(response);
//       } catch (error) {
//         console.log("error fetch data", error.message);
//         throw error;
//       }
//     };
//     fetchData(courseCode);
//   }, [courseCode]);

//   const handleUpdate = async () => {
//     try {
//       const updatedClass = {
//         title: getDetail.data.title,
//         courseCode: getDetail.data.courseCode,
//         category: {
//           categoryName: getDetail.data.category,
//         },
//         type: getDetail.data.type,
//         level: getDetail.data.level,
//         price: getDetail.data.price,
//         description: getDetail.data.description,
//         telegramLink: getDetail.data.telegramLink,
//         chapter: getDetail.data.chapter.map((chapter) => ({
//           chapterNo: chapter.chapterNo,
//           chapterTitle: chapter.chapterTitle,
//           subject: chapter.subject.map((subject) => ({
//             subjectNo: subject.subjectNo,
//             videoTitle: subject.videoTitle,
//             videoLink: subject.videoLink,
//             subjectType: subject.subjectType,
//           })),
//         })),
//       };

//       await updateCourse(courseCode, updatedClass);
//       toast.success("Berhasil Update Data ");
//     } catch (error) {
//       toast.error("Gagal Menambahkan Kelas");
//     }
//   };

//   const handleInputChange = (field, value) => {
//     if (isEditing) {
//       setGetDetail((prevDetail) => ({
//         ...prevDetail,
//         data: {
//           ...prevDetail.data,
//           [field]: value,
//         },
//       }));
//     }
//   };

//   // const addChapter = () => {
//   //   if(isEditing){
//   //     setGetDetail((prevDetail) => {
//   //       console.log(prevDetail);
//   //       return{
//   //         ...prevDetail,
//   //         chapter: [
//   //           ...prevDetail.chapter,
//   //           {
//   //             chapterNo:prevDetail.chapter.length + 1,
//   //             chapterTitle: "",
//   //             subject: [],
//   //           }
//   //         ]
//   //       }
//   //     })
//   //   }
//   // }

//   // const addSubject = (chapterIndex) => {
//   //   setGetDetail((prevDetail) => {
//   //     const updatedChapters = [...prevDetail.chapter];
//   //     if(chapterIndex >= 0 && chapterIndex < updatedChapters.length){
//   //       updatedChapters[chapterIndex].subject.push({
//   //         subjectNo: updatedChapters[chapterIndex].subject.length + 1,
//   //         videoTitle: "",
//   //         videoLink: "",
//   //         subjectType: "",
//   //       })
//   //     }
//   //     return{
//   //       ...prevDetail,
//   //       chapter: updatedChapters,
//   //     }
//   //   })
//   // }

//   const handleChapterInputChange = (
//     field,
//     value,
//     chapterIndex,
//     subjectIndex
//   ) => {
//     if (isEditing) {
//       setGetDetail((prevDetail) => {
//         const updatedChapters = [...prevDetail.data.chapter];
//         if (chapterIndex !== undefined && subjectIndex !== undefined) {
//           updatedChapters[chapterIndex].subject[subjectIndex][field] = value;
//         } else if (chapterIndex !== undefined) {
//           updatedChapters[chapterIndex][field] = value;
//         }
//         return {
//           ...prevDetail,
//           data: {
//             ...prevDetail.data,
//             chapter: updatedChapters,
//           },
//         };
//       });
//     }
//   };

//   const toggleEdit = () => {
//     setIsEditing((prevIsEditing) => !prevIsEditing);
//   };

//   if (!getDetail) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div
//       className="d-flex align-items-center p-3"
//       style={{ backgroundColor: `var(--primary-young-blue)` }}
//     >
//       <div className="w-100">
//         <h3 className="text-center">Update Course</h3>

//         <button
//           onClick={toggleEdit}
//           className="btn btn-warning my-4 fw-bold"
//           style={{ marginRight: "2em" }}
//         >
//           {isEditing ? "Cancel Edit" : "Edit"}
//         </button>
//         {isEditing && (
//           <button
//             onClick={handleUpdate}
//             className="btn text-light fw-bold"
//             style={{ backgroundColor: `var(--primary-purple)` }}
//           >
//             Update
//           </button>
//         )}
//         <div className="d-flex flex-column mb-4">
//           <label htmlFor="" className="mb-2">
//             Nama Kelas
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             value={getDetail.data.title}
//             onChange={(e) => handleInputChange("title", e.target.value)}
//             readOnly={!isEditing}
//           />
//         </div>

//         <div className="d-flex flex-column mb-4">
//           <label htmlFor="" className="mb-2">
//             Kategori
//           </label>
//           <select
//             id="category-name"
//             type="text"
//             className="form-select"
//             value={getDetail.data.category.categoryName}
//             onChange={(e) => handleInputChange("category", e.target.value)}
//             readOnly={!isEditing}
//           >
//             <option value="UIUX_DESIGN">UIUX Design</option>
//             <option value="DATA_SCIENCE">Data Science</option>
//             <option value="WEB_DEVELOPMENT">Web Development</option>
//             <option value="ANDROID_DEVELOPMENT">Android Development</option>
//             <option value="IOS_DEVELOPMENT">iOS Development</option>
//             <option value="PRODUCT_MANAGEMENT">Product Management</option>
//           </select>
//         </div>

//         <div className="d-flex flex-column mb-4">
//           <label htmlFor="" className="mb-2">
//             Kode Kelas
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             value={getDetail.data.courseCode}
//             onChange={(e) => handleInputChange("courseCode", e.target.value)}
//             readOnly
//           />
//         </div>

//         <div className="d-flex flex-column mb-4">
//           <label htmlFor="" className="mb-2">
//             Type Kelas
//           </label>
//           <div className="d-flex">
//             <div
//               className="form-check form-check-inline rounded-2 py-1"
//               style={{
//                 backgroundColor: `var(--allert-green)`,
//                 paddingLeft: "2em",
//                 paddingRight: "1em",
//               }}
//             >
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id="gratisRadio"
//                 value={getDetail.data.type}
//                 checked={getDetail.data.type === "GRATIS"}
//                 onChange={() => {
//                   handleInputChange("type", "GRATIS");
//                   setIsPriceDisabled(true);
//                 }}
//               />
//               <label
//                 className="form-check-label text-light"
//                 htmlFor="gratisRadio"
//               >
//                 GRATIS
//               </label>
//             </div>
//             <div
//               className="form-check form-check-inline rounded-2 py-1"
//               style={{
//                 backgroundColor: `var(--primary-purple)`,
//                 paddingLeft: "2em",
//                 paddingRight: "1em",
//               }}
//             >
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id="premiumRadio"
//                 value={getDetail.data.type}
//                 checked={getDetail.data.type === "PREMIUM"}
//                 onChange={() => {
//                   handleInputChange("type", "PREMIUM");
//                   setIsPriceDisabled(false);
//                 }}
//               />
//               <label
//                 className="form-check-label text-light"
//                 htmlFor="premiumRadio"
//               >
//                 PREMIUM
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="d-flex flex-column mb-4">
//           <label htmlFor="" className="mb-2">
//             Teacher
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             value={getDetail.data.teacher}
//             readOnly
//           />
//         </div>

//         <div className="d-flex flex-column mb-4">
//           <label htmlFor="" className="mb-2">
//             Level
//           </label>
//           <select
//             className="form-select"
//             value={getDetail.data.level}
//             onChange={(e) => handleInputChange("level", e.target.value)}
//             readOnly={!isEditing}
//           >
//             <option value="BEGINNER">Beginner</option>
//             <option value="INTERMEDIATE">Intermediate</option>
//             <option value="ADVANCE">Advance</option>
//           </select>
//         </div>

//         <div className="d-flex flex-column mb-4">
//           <label htmlFor="" className="mb-2">
//             Price
//           </label>
//           <input
//             className="form-control"
//             type="number"
//             value={isPriceDisabled ? 0 : getDetail.data.price}
//             onChange={(e) => handleInputChange("price", e.target.value)}
//             disabled={isPriceDisabled}
//             readOnly={!isEditing}
//           />
//         </div>

//         <div className="d-flex flex-column">
//           <label htmlFor="" className="mb-2">Telegram Kelas</label>
//           <input type="text" 
//           className="form-control"
//           value={getDetail.data.telegramLink}
//           onChange={(e) => handleChapterInputChange("telegramLink", e.target.value)}
//           readOnly={isEditing}
//           />
//         </div>

//         <div className="d-flex flex-column mb-4">
//           <label htmlFor="" className="mb-2">
//             Deskripsi Kelas
//           </label>
//           <textarea
//             className="form-control"
//             value={getDetail.data.description}
//             onChange={(e) => handleInputChange("description", e.target.value)}
//             readOnly={!isEditing}
//           />
//         </div>

//         {getDetail.data.chapter.map((chapter, chapterIndex) => (
//           <div key={chapterIndex} className="p-3 rounded-3 my-3" style={{backgroundColor:"white"}}>
//             <h4>Chapters {chapter.chapterNo}</h4>
//             <p>
//               <input
//                 className="form-control"
//                 type="text"
//                 value={chapter.chapterTitle}
//                 onChange={(e) =>
//                   handleChapterInputChange(
//                     "chapterTitle",
//                     e.target.value,
//                     chapterIndex
//                   )
//                 }
//                 readOnly={!isEditing}
//               />
//             </p>
//             <div style={{ marginLeft: "2em" }}>
//               {chapter.subject.map((subject, subjectIndex) => (
//                 <div key={`subject-${chapterIndex}-${subjectIndex}`}>
//                   <h4>Subjects {subject.subjectNo}</h4>
//                   <div style={{ marginLeft: "2em" }}>
//                     <div className="mb-4">
//                       <label htmlFor="" className="mb-2">
//                         Subject Title
//                       </label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         value={subject.videoTitle}
//                         onChange={(e) =>
//                           handleChapterInputChange(
//                             "videoTitle",
//                             e.target.value,
//                             chapterIndex,
//                             subjectIndex
//                           )
//                         }
//                         readOnly={!isEditing}
//                       />
//                     </div>

//                     <div className="d-flex flex-column mb-4">
//                       <label htmlFor="" className="mb-2">
//                         Video Link
//                       </label>

//                       <input
//                         className="form-control"
//                         type="text"
//                         value={subject.videoLink}
//                         onChange={(e) =>
//                           handleChapterInputChange(
//                             "videoLink",
//                             e.target.value,
//                             chapterIndex,
//                             subjectIndex
//                           )
//                         }
//                         readOnly={!isEditing}
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="" className="mb-2">
//                         Subject Type
//                       </label>
//                       <div className="d-flex">
//                         <div
//                           className="form-check form-check-inline rounded-2 py-1"
//                           style={{
//                             backgroundColor: `var(--allert-green)`,
//                             paddingLeft: "2em",
//                             paddingRight: "1em",
//                           }}
//                         >
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             id="gratisRadio"
//                             value="GRATIS"
//                             // checked={subject.subjectType === "GRATIS"}
//                             checked={isPriceDisabled || subject.subjectType === "GRATIS"}
//                             onChange={(e) =>
//                               handleChapterInputChange(
//                                 "subjectType",
//                                 e.target.value,
//                                 chapterIndex,
//                                 subjectIndex
//                               )
//                             }
//                             disabled={isPriceDisabled}
//                           />
//                           <label
//                             className="form-check-label text-light"
//                             htmlFor="gratisRadio"
//                           >
//                             GRATIS
//                           </label>
//                         </div>
//                         <div
//                           className="form-check form-check-inline rounded-2 py-1"
//                           style={{
//                             backgroundColor: `var(--primary-purple)`,
//                             paddingLeft: "2em",
//                             paddingRight: "1em",
//                           }}
//                         >
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             id="premiumRadio"
//                             value="PREMIUM"
//                             // checked={subject.subjectType === "PREMIUM"}
//                             checked={!isPriceDisabled && subject.subjectType === "PREMIUM"}
//                             onChange={(e) =>
//                               handleChapterInputChange(
//                                 "subjectType",
//                                 e.target.value,
//                                 chapterIndex,
//                                 subjectIndex
//                               )
//                             }
//                             disabled={isPriceDisabled}
//                           />
//                           <label
//                             className="form-check-label text-light"
//                             htmlFor="premiumRadio"
//                           >
//                             PREMIUM
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <style>{`
//       .form-control{
//         border: 1px solid var(--primary-purple);
//       }
//       .form-select{
//         border: 1px solid var(--primary-purple);
//       }
//       `}</style>
//     </div>
//   );
// }

// export default UpdateCourse;

{
  /* {getDetail.chapter.map((chapter, chapterIndex) => (
                    <div
                      key={chapterIndex}
                      className="bg-success-subtle p-3 mb-3 rounded"
                    >
                      <h5>Chapter {chapter.chapterNo}</h5>
                      <div className="mb-3">
                        <label
                          htmlFor={`chapter-title-${chapterIndex}`}
                          className="form-label"
                        >
                          Chapter Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`chapter-title-${chapterIndex}`}
                          value={chapter.chapterTitle}
                          onChange={(e) =>
                            handleChapterInputChange(
                              "chapterTitle",
                              e.target.value,
                              chapterIndex
                            )
                          }
                        />
                      </div>

                      {chapter.subject.map((subject, subjectIndex) => (
                        <div
                          key={subjectIndex}
                          className="bg-light p-3 mb-3 rounded"
                        >
                          <h6>Subject {subject.subjectNo}</h6>
                          <div className="mb-3">
                            <label
                              htmlFor={`video-title-${chapterIndex}-${subjectIndex}`}
                              className="form-label"
                            >
                              Video Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`video-title-${chapterIndex}-${subjectIndex}`}
                              value={subject.videoTitle}
                              onChange={(e) =>
                                handleChapterInputChange(
                                  "videoTitle",
                                  e.target.value,
                                  chapterIndex,
                                  subjectIndex
                                )
                              }
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor={`video-link-${chapterIndex}-${subjectIndex}`}
                              className="form-label"
                            >
                              Video Link
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`video-link-${chapterIndex}-${subjectIndex}`}
                              value={subject.videoLink}
                              onChange={(e) =>
                                handleChapterInputChange(
                                  "videoLink",
                                  e.target.value,
                                  chapterIndex,
                                  subjectIndex
                                )
                              }
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor={`subject-type-${chapterIndex}-${subjectIndex}`}
                              className="form-label"
                            >
                              Subject Type
                            </label>
                            <select
                              className="form-select"
                              id={`subject-type-${chapterIndex}-${subjectIndex}`}
                              value={subject.subjectType}
                              onChange={(e) =>
                                handleChapterInputChange(
                                  "subjectType",
                                  e.target.value,
                                  chapterIndex,
                                  subjectIndex
                                )
                              }
                            >
                              <option value="GRATIS">Gratis</option>
                              <option value="PREMIUM">Premium</option>
                            </select>
                          </div>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>
                              removeSubject(chapterIndex, subjectIndex)
                            }
                          >
                            Remove Subject
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => addSubject(chapterIndex)}
                      >
                        Add Subject
                      </button>
                    </div>
                  ))} */
}

import React, { useEffect, useState } from "react";
import getDetailCourse from "../api/getDetailsCourse";
import updateCourse from "../api/updateCorse";
import { toast } from "react-toastify";

function UpdateCourse({ courseCode }) {
  const [getDetail, setGetDetail] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [isPriceDisabled, setIsPriceDisabled] = useState(false);

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
          categoryName: getDetail.data.category,
        },
        type: getDetail.data.type,
        level: getDetail.data.level,
        price: getDetail.data.price,
        description: getDetail.data.description,
        telegramLink: getDetail.data.telegramLink,
        // chapter: getDetail.data.chapter.map((chapter) => ({
        //   chapterNo: chapter.chapterNo,
        //   chapterTitle: chapter.chapterTitle,
        //   subject: chapter.subject.map((subject) => ({
        //     subjectNo: subject.subjectNo,
        //     videoTitle: subject.videoTitle,
        //     videoLink: subject.videoLink,
        //     subjectType: subject.subjectType,
        //   })),
        // })),
      };

      await updateCourse(courseCode, updatedClass);
      toast.success("Berhasil Update Data ");
    } catch (error) {
      toast.error("Gagal Menambahkan Kelas");
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

  // const addChapter = () => {
  //   if(isEditing){
  //     setGetDetail((prevDetail) => {
  //       console.log(prevDetail);
  //       return{
  //         ...prevDetail,
  //         chapter: [
  //           ...prevDetail.chapter,
  //           {
  //             chapterNo:prevDetail.chapter.length + 1,
  //             chapterTitle: "",
  //             subject: [],
  //           }
  //         ]
  //       }
  //     })
  //   }
  // }

  // const addSubject = (chapterIndex) => {
  //   setGetDetail((prevDetail) => {
  //     const updatedChapters = [...prevDetail.chapter];
  //     if(chapterIndex >= 0 && chapterIndex < updatedChapters.length){
  //       updatedChapters[chapterIndex].subject.push({
  //         subjectNo: updatedChapters[chapterIndex].subject.length + 1,
  //         videoTitle: "",
  //         videoLink: "",
  //         subjectType: "",
  //       })
  //     }
  //     return{
  //       ...prevDetail,
  //       chapter: updatedChapters,
  //     }
  //   })
  // }

  const handleChapterInputChange = (
    field,
    value,
    chapterIndex,
    subjectIndex
  ) => {
    if (isEditing) {
      setGetDetail((prevDetail) => {
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
    <div
      className="d-flex align-items-center p-3"
      style={{ backgroundColor: `var(--primary-young-blue)` }}
    >
      <div className="w-100">
        <h3 className="text-center">Update Course</h3>

        <button
          onClick={toggleEdit}
          className="btn btn-warning my-4 fw-bold"
          style={{ marginRight: "2em" }}
        >
          {isEditing ? "Cancel Edit" : "Edit"}
        </button>
        {isEditing && (
          <button
            onClick={handleUpdate}
            className="btn text-light fw-bold"
            style={{ backgroundColor: `var(--primary-purple)` }}
          >
            Update
          </button>
        )}
        <div className="d-flex flex-column mb-4">
          <label htmlFor="" className="mb-2">
            Nama Kelas
          </label>
          <input
            className="form-control"
            type="text"
            value={getDetail.data.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            readOnly={!isEditing}
          />
        </div>

        <div className="d-flex flex-column mb-4">
          <label htmlFor="" className="mb-2">
            Kategori
          </label>
          <select
            id="category-name"
            type="text"
            className="form-select"
            value={getDetail.data.category.categoryName}
            onChange={(e) => handleInputChange("category", e.target.value)}
            readOnly={!isEditing}
          >
            <option value="UIUX_DESIGN">UIUX Design</option>
            <option value="DATA_SCIENCE">Data Science</option>
            <option value="WEB_DEVELOPMENT">Web Development</option>
            <option value="ANDROID_DEVELOPMENT">Android Development</option>
            <option value="IOS_DEVELOPMENT">iOS Development</option>
            <option value="PRODUCT_MANAGEMENT">Product Management</option>
          </select>
        </div>

        <div className="d-flex flex-column mb-4">
          <label htmlFor="" className="mb-2">
            Kode Kelas
          </label>
          <input
            className="form-control"
            type="text"
            value={getDetail.data.courseCode}
            onChange={(e) => handleInputChange("courseCode", e.target.value)}
            readOnly
          />
        </div>

        <div className="d-flex flex-column mb-4">
          <label htmlFor="" className="mb-2">
            Type Kelas
          </label>
          <div className="d-flex">
            <div
              className="form-check form-check-inline rounded-2 py-1"
              style={{
                backgroundColor: `var(--allert-green)`,
                paddingLeft: "2em",
                paddingRight: "1em",
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                id="gratisRadio"
                value={getDetail.data.type}
                checked={getDetail.data.type === "GRATIS"}
                onChange={() => {
                  handleInputChange("type", "GRATIS");
                  setIsPriceDisabled(true);
                }}
              />
              <label
                className="form-check-label text-light"
                htmlFor="gratisRadio"
              >
                GRATIS
              </label>
            </div>
            <div
              className="form-check form-check-inline rounded-2 py-1"
              style={{
                backgroundColor: `var(--primary-purple)`,
                paddingLeft: "2em",
                paddingRight: "1em",
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                id="premiumRadio"
                value={getDetail.data.type}
                checked={getDetail.data.type === "PREMIUM"}
                onChange={() => {
                  handleInputChange("type", "PREMIUM");
                  setIsPriceDisabled(false);
                }}
              />
              <label
                className="form-check-label text-light"
                htmlFor="premiumRadio"
              >
                PREMIUM
              </label>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column mb-4">
          <label htmlFor="" className="mb-2">
            Teacher
          </label>
          <input
            className="form-control"
            type="text"
            value={getDetail.data.teacher}
            readOnly
          />
        </div>

        <div className="d-flex flex-column mb-4">
          <label htmlFor="" className="mb-2">
            Level
          </label>
          <select
            className="form-select"
            value={getDetail.data.level}
            onChange={(e) => handleInputChange("level", e.target.value)}
            readOnly={!isEditing}
          >
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCE">Advance</option>
          </select>
        </div>

        <div className="d-flex flex-column mb-4">
          <label htmlFor="" className="mb-2">
            Price
          </label>
          <input
            className="form-control"
            type="number"
            value={isPriceDisabled ? 0 : getDetail.data.price}
            onChange={(e) => handleInputChange("price", e.target.value)}
            disabled={isPriceDisabled}
            readOnly={!isEditing}
          />
        </div>

        <div className="d-flex flex-column">
          <label htmlFor="" className="mb-2">Telegram Kelas</label>
          <input type="text" 
          className="form-control"
          value={getDetail.data.telegramLink}
          onChange={(e) => handleChapterInputChange("telegramLink", e.target.value)}
          readOnly={isEditing}
          />
        </div>

        <div className="d-flex flex-column mb-4">
          <label htmlFor="" className="mb-2">
            Deskripsi Kelas
          </label>
          <textarea
            className="form-control"
            value={getDetail.data.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            readOnly={!isEditing}
          />
        </div>

        {/* {getDetail.data.chapter.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className="p-3 rounded-3 my-3" style={{backgroundColor:"white"}}>
            <h4>Chapters {chapter.chapterNo}</h4>
            <p>
              <input
                className="form-control"
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
            </p>
            <div style={{ marginLeft: "2em" }}>
              {chapter.subject.map((subject, subjectIndex) => (
                <div key={`subject-${chapterIndex}-${subjectIndex}`}>
                  <h4>Subjects {subject.subjectNo}</h4>
                  <div style={{ marginLeft: "2em" }}>
                    <div className="mb-4">
                      <label htmlFor="" className="mb-2">
                        Subject Title
                      </label>
                      <input
                        className="form-control"
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
                    </div>

                    <div className="d-flex flex-column mb-4">
                      <label htmlFor="" className="mb-2">
                        Video Link
                      </label>

                      <input
                        className="form-control"
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
                    </div>

                    <div>
                      <label htmlFor="" className="mb-2">
                        Subject Type
                      </label>
                      <div className="d-flex">
                        <div
                          className="form-check form-check-inline rounded-2 py-1"
                          style={{
                            backgroundColor: `var(--allert-green)`,
                            paddingLeft: "2em",
                            paddingRight: "1em",
                          }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            id="gratisRadio"
                            value="GRATIS"
                            // checked={subject.subjectType === "GRATIS"}
                            checked={isPriceDisabled || subject.subjectType === "GRATIS"}
                            onChange={(e) =>
                              handleChapterInputChange(
                                "subjectType",
                                e.target.value,
                                chapterIndex,
                                subjectIndex
                              )
                            }
                            disabled={isPriceDisabled}
                          />
                          <label
                            className="form-check-label text-light"
                            htmlFor="gratisRadio"
                          >
                            GRATIS
                          </label>
                        </div>
                        <div
                          className="form-check form-check-inline rounded-2 py-1"
                          style={{
                            backgroundColor: `var(--primary-purple)`,
                            paddingLeft: "2em",
                            paddingRight: "1em",
                          }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            id="premiumRadio"
                            value="PREMIUM"
                            // checked={subject.subjectType === "PREMIUM"}
                            checked={!isPriceDisabled && subject.subjectType === "PREMIUM"}
                            onChange={(e) =>
                              handleChapterInputChange(
                                "subjectType",
                                e.target.value,
                                chapterIndex,
                                subjectIndex
                              )
                            }
                            disabled={isPriceDisabled}
                          />
                          <label
                            className="form-check-label text-light"
                            htmlFor="premiumRadio"
                          >
                            PREMIUM
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))} */}
      </div>
      <style>{`
      .form-control{
        border: 1px solid var(--primary-purple);
      }
      .form-select{
        border: 1px solid var(--primary-purple);
      }
      `}</style>
    </div>
  );
}

export default UpdateCourse;
