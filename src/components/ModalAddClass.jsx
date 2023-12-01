import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

function ModalAddClass() {
  const [classData, setClassData] = useState({
    name: "",
    category: "",
    courseCode: "",
    type: "",
    level: "",
    price: 0,
    description: "",
    chapters: [],
  });

  const handleInputChange = (field, value) => {
    setClassData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const addChapter = () => {
    setClassData((prevData) => ({
      ...prevData,
      chapters: [
        ...prevData.chapters,
        {
          chapter_no: prevData.chapters.length + 1,
          chapter_title: "",
          subjects: [
            { subject_no: 1, video_title: "", video_link: "" },
            { subject_no: 2, video_title: "", video_link: "" },
          ],
        },
      ],
    }));
  };

  const handleChapterInputChange = (
    field,
    value,
    chapterIndex,
    subjectIndex
  ) => {
    setClassData((prevData) => {
      const updatedChapters = [...prevData.chapters];
      if (chapterIndex !== undefined && subjectIndex !== undefined) {
        updatedChapters[chapterIndex].subjects[subjectIndex][field] = value;
      } else if (chapterIndex !== undefined) {
        updatedChapters[chapterIndex][field] = value;
      }
      return {
        ...prevData,
        chapters: updatedChapters,
      };
    });
  };

  const handleSubmit = () => {
    // Send classData to API using a POST request
    console.log(classData);
    // Add your API call logic here
  };

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
                      value={classData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="category-name" className="col-form-label">
                      Kategori
                    </label>
                    <input className="form-control" id="category-name"></input>
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-code" className="col-form-label">
                      Kode Kelas
                    </label>
                    <input className="form-control" id="category-name"></input>
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-type" className="col-form-label">
                      Tipe Kelas
                    </label>
                    <input className="form-control" id="category-name"></input>
                  </div>

                  <div className="mb-1">
                    <label htmlFor="level-type" className="col-form-label">
                      Level
                    </label>
                    <input className="form-control" id="category-name"></input>
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-price" className="col-form-label">
                      Harga
                    </label>
                    <input className="form-control" id="category-name"></input>
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-material" className="col-form-label">
                      Deskripsi
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>

                  {classData.chapters.map((chapter, chapterIndex) => (
                    <div
                      key={chapterIndex}
                      className="bg-success-subtle p-3 mb-3 rounded"
                    >
                      <h5>Chapter {chapter.chapter_no}</h5>
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
                          value={chapter.chapter_title}
                          onChange={(e) =>
                            handleChapterInputChange(
                              "chapter_title",
                              e.target.value,
                              chapterIndex
                            )
                          }
                        />
                      </div>

                      {chapter.subjects.map((subject, subjectIndex) => (
                        <div
                          key={subjectIndex}
                          className="bg-light p-3 mb-3 rounded"
                        >
                          <h6>Subject {subject.subject_no}</h6>
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
                                  "video_title",
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
                                  "video_link",
                                  e.target.value,
                                  chapterIndex,
                                  subjectIndex
                                )
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}

                  <button
                    type="button"
                    className="btn btn-primary rounded-pill"
                    onClick={addChapter}
                    >
                    Tambah Chapter
                  </button>

                  <button
                    type="button"
                    className="btn btn-success rounded-pill mx-4 "
                    onClick={handleSubmit}
                  >
                    Simpan
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger rounded-pill"
                  data-bs-dismiss="modal"
                >
                  Upload Video
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

                 
