import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { createClass } from "../api/createClass";

function ModalAddClass() {
  const [classData, setClassData] = useState({
    title: "",
    category: "",
    courseCode: "",
    type: "",
    level: "",
    price: 0,
    description: "",
    teacher: "",
    chapter: [],
  });

  const handleInputChange = (field, value) => {
    setClassData((prevData) => {
      console.log(prevData);
      return {
        ...prevData,
        [field]: value,
      };
    });
  };

  const addChapter = () => {
    setClassData((prevData) => {
      console.log(prevData);
      return {
        ...prevData,
        chapter: [
          ...prevData.chapter,
          {
            chapterNo: prevData.chapter.length + 1,
            chapterTitle: "",
            subject: [],
          },
        ],
      };
    });
  };

  const addSubject = (chapterIndex, isPremium) => {
    setClassData((prevData) => {
      const updatedChapters = [...prevData.chapter];
      if (chapterIndex >= 0 && chapterIndex < updatedChapters.length) {
        updatedChapters[chapterIndex].subject.push({
          subjectNo: updatedChapters[chapterIndex].subject.length + 1,
          videoTitle: "",
          videoLink: "",
          subjectType: { name: isPremium ? "PREMIUM" : "FREE" },
        });
      }
      return {
        ...prevData,
        chapter: updatedChapters,
      };
    });
  };

  const handleChapterInputChange = (
    field,
    value,
    chapterIndex,
    subjectIndex
  ) => {
    setClassData((prevData) => {
      console.log(prevData);
      const updatedChapters = [...prevData.chapter];
      if (chapterIndex !== undefined && subjectIndex !== undefined) {
        updatedChapters[chapterIndex].subject[subjectIndex][field] = value;
      } else if (chapterIndex !== undefined) {
        updatedChapters[chapterIndex][field] = value;
      }
      return {
        ...prevData,
        chapter: updatedChapters,
      };
    });
  };

  const removeSubject = (chapterIndex, subjectIndex) => {
    setClassData((prevData) => {
      const updatedChapters = [...prevData.chapter];
      updatedChapters[chapterIndex].subject.splice(subjectIndex, 1);
      return {
        ...prevData,
        chapter: updatedChapters,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      await createClass(classData);
      console.log("berhasil menambahkan");
    } catch (error) {
      console.log("gagal menambahkan", error.message);
    }
  };
  // useEffect(() => {
  //   if (isUpdateMode && courseIdToUpdate) {
  //     const courseToUpdate = getCourseById(courseIdToUpdate); // Gantilah dengan cara yang sesuai
  //     if (courseToUpdate) {
  //       setClassData(courseToUpdate);
  //     }
  //   } else {
  //     setClassData({
  //       title: "",
  //       category: "",
  //       courseCode: "",
  //       type: "",
  //       level: "",
  //       price: 0,
  //       description: "",
  //       teacher: "",
  //       chapter: [],
  //     });
  //   }
  // }, [isUpdateMode, courseIdToUpdate]);

  return (
    <div className="class">
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn rounded-pill d-flex flex-row justify-content-between align-items-center text-light"
          style={{ backgroundColor: `var(--primary-purple)` }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          <span>
            <CiCirclePlus className="fs-4" style={{ marginRight: "0.5em" }} />
          </span>
          Tambah
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content px-5">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Tambah Kelas
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-1">
                    <label htmlFor="class-name" className="col-form-label">
                      Nama Kelas
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="class-name"
                      value={classData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="category-name" className="col-form-label">
                      Kategori
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="category-name"
                      value={classData.category}
                      onChange={(e) =>
                        handleInputChange("category", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-code" className="col-form-label">
                      Kode Kelas
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="class-code"
                      value={classData.courseCode}
                      onChange={(e) =>
                        handleInputChange("courseCode", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-type" className="col-form-label">
                      Tipe Kelas
                    </label>
                    <select
                      className="form-control"
                      id="type-name"
                      value={classData.type}
                      onChange={(e) =>
                        handleInputChange("type", e.target.value)
                      }
                    >
                      <option value="free">Free</option>
                      <option value="premium">Premium</option>
                    </select>
                  </div>

                  <div className="mb-1">
                    <label htmlFor="level-type" className="col-form-label">
                      Level
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="level-name"
                      value={classData.level}
                      onChange={(e) =>
                        handleInputChange("level", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-price" className="col-form-label">
                      Harga
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="price-name"
                      value={classData.price}
                      onChange={(e) =>
                        handleInputChange("price", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="level-type" className="col-form-label">
                      Author
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="author-name"
                      value={classData.teacher}
                      onChange={(e) =>
                        handleInputChange("teacher", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-material" className="col-form-label">
                      Deskripsi
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      value={classData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                    ></textarea>
                  </div>

                  {classData.chapter.map((chapter, chapterIndex) => (
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
                              value={subject.video_title}
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
                              value={subject.video_link}
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
                              value={subject.subjectType.name}
                              onChange={(e) =>
                                handleChapterInputChange(
                                  "subjectType",
                                  { name: e.target.value },
                                  chapterIndex,
                                  subjectIndex
                                )
                              }
                            >
                              <option value="FREE">FREE</option>
                              <option value="PREMIUM">PREMIUM</option>
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
                  ))}

                  <button
                    type="button"
                    className="btn rounded-pill text-light my-3"
                    style={{ backgroundColor: `var(--primary-blue)` }}
                    onClick={addChapter}
                  >
                    Tambah Chapter
                  </button>

                  <button
                    type="button"
                    className="btn rounded-pill mx-4 text-light"
                    style={{ backgroundColor: `var(--primary-purple)` }}
                    onClick={handleSubmit}
                  >
                    Simpan
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn rounded-pill text-light"
                  style={{ backgroundColor: `var(--neutral-grey)` }}
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddClass;
