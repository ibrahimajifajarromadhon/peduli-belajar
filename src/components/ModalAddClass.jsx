import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { createClass } from "../api/createClass";
import { toast } from "react-hot-toast";

function ModalAddClass() {
  const [isPriceDisabled, setIsPriceDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [classData, setClassData] = useState({
    title: "",
    courseCode: "",
    category: { categoryName: "" },
    type: "",
    level: "",
    price: 0,
    description: "",
    telegramLink: "",
    chapter: [],
  });

  const handleInputChange = (field, value) => {
    setClassData((prevData) => {
      console.log(prevData);
      return {
        ...prevData,
        [field]: field === "category" ? { categoryName: value } : value,
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

  const addSubject = (chapterIndex) => {
    setClassData((prevData) => {
      const updatedChapters = [...prevData.chapter];
      if (chapterIndex >= 0 && chapterIndex < updatedChapters.length) {
        const totalSubjectsBeforeChapter = updatedChapters
        .slice(0, chapterIndex)
        .reduce((total, ch) => total + ch.subject.length, 0);

      const currentChapter = updatedChapters[chapterIndex];
      const totalSubjectsInChapter = currentChapter.subject.length;

      updatedChapters[chapterIndex].subject.push({
        subjectNo: totalSubjectsBeforeChapter + totalSubjectsInChapter + 1,
        videoTitle: "",
        videoLink: "",
        subjectType: "",
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
      toast.success("Berhasil tambah data course");
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      toast.error("Pastikan data yang diinputkan benar", error.message);
    }
  };

  return (
    <div className="class">
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn rounded-pill d-flex flex-row justify-content-between align-items-center text-light"
          style={{ backgroundColor: `var(--primary-purple)`, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          onClick={() => setIsModalOpen(true)}
        >
          <span>
            <CiCirclePlus className="fs-4" style={{ marginRight: "0.5em" }} />
          </span>
           Tambah
        </button>

        <div
          className={`modal fade ${isModalOpen ? "show" : ""}`}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!isModalOpen}
        >
          <div className="modal-dialog" style={{fontFamily:"Montserrat"}}>
            <div className="modal-content px-2">
              <div className="modal-header" style={{borderBottom:"none"}}>
                <h1 className="modal-title py-2" style={{ color: "var(--primary-purple)", fontWeight:"700", fontSize:"25px" }} id="exampleModalLabel">
                  Tambah Kelas
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{marginTop:"-20px"}}>
                <form>
                  <div className="mb-1">
                    <label htmlFor="class-name" className="col-form-label" style={{fontSize:"16px", fontWeight:"600"}}>
                      Nama Kelas
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="class-name"
                      placeholder="Text"
                      value={classData.title}
                      style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="category-name" className="col-form-label" style={{fontSize:"16px", fontWeight:"600"}}>
                      Kategori
                    </label>
                    <select
                      type="text"
                      className="form-select"
                      id="category-name"
                      placeholder="Text"
                      value={classData.category.categoryName}
                      style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
                      onChange={(e) =>
                        handleInputChange("category", e.target.value)
                      }
                    >
                      <option value="">Pilih Kategori</option>
                      <option value="UIUX_DESIGN">UIUX Design</option>
                      <option value="DATA_SCIENCE">Data Science</option>
                      <option value="WEB_DEVELOPMENT">Web Development</option>
                      <option value="ANDROID_DEVELOPMENT">
                        Android Development
                      </option>
                      <option value="IOS_DEVELOPMENT">iOS Development</option>
                      <option value="PRODUCT_MANAGEMENT">
                        Product Management
                      </option>
                    </select>
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-code" className="col-form-label" style={{fontSize:"16px", fontWeight:"600"}}>
                      Kode Kelas
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="class-code"
                      placeholder="Text"
                      value={classData.courseCode}
                      style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
                      onChange={(e) =>
                        handleInputChange("courseCode", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-type" className="col-form-label" style={{fontSize:"16px", fontWeight:"600"}}>
                      Tipe Kelas
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
                          checked={classData.type === "GRATIS"}
                          onChange={() => {
                            handleInputChange("type", "GRATIS");
                            setIsPriceDisabled(true);
                          }}
                        />
                        <label
                          className="form-check-label text-light"
                          htmlFor="gratisRadio" style={{fontSize:"16px", fontWeight:"600"}}
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
                          checked={classData.type === "PREMIUM"}
                          onChange={() => {
                            handleInputChange("type", "PREMIUM");
                            setIsPriceDisabled(false);
                          }}
                        />
                        <label
                          className="form-check-label text-light"
                          htmlFor="premiumRadio"
                          style={{fontSize:"16px", fontWeight:"600"}}
                        >
                          PREMIUM
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-1">
                    <label htmlFor="level-type" className="col-form-label" style={{fontSize:"16px", fontWeight:"600"}}>
                      Level
                    </label>
                    <select
                      type="text"
                      className="form-select"
                      id="level-name"
                      value={classData.level}
                      style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
                      onChange={(e) =>
                        handleInputChange("level", e.target.value)
                      }
                    >
                      <option value="">Pilih Level</option>
                      <option value="BEGINNER">Beginner</option>
                      <option value="INTERMEDIATE">Intermediate</option>
                      <option value="ADVANCE">Advance</option>
                    </select>
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-price" className="col-form-label"                       style={{fontSize:"16px", fontWeight:"600"}}>
                      Harga
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="price-name"
                      value={classData.price}
                      style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
                      onChange={(e) =>
                        handleInputChange("price", e.target.value)
                      }
                      disabled={isPriceDisabled}
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="level-type" className="col-form-label" style={{fontSize:"16px", fontWeight:"600"}}>
                      Link Telegram
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="telegram-link"
                      placeholder="Text"
                      value={classData.telegramLink}
                      style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
                      onChange={(e) =>
                        handleInputChange("telegramLink", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="class-material" className="col-form-label"                       style={{fontSize:"16px", fontWeight:"600"}}>
                      Deskripsi
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      value={classData.description}
                      placeholder="Paragraph"
                      style={{fontSize:"16px", fontWeight:"500", height:"120px", borderRadius:"13px"}}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                    ></textarea>
                  </div>

                  {classData.chapter.map((chapter, chapterIndex) => (
                    <div
                      key={chapterIndex}
                      className="bg-success-subtle p-3 mb-3 rounded mt-4"
                    >
                      <h5 style={{fontWeight:"700"}}>Chapter {chapter.chapterNo}</h5>
                      <div className="mb-3">
                        <label
                          htmlFor={`chapter-title-${chapterIndex}`}
                          className="form-label" 
                          style={{fontSize:"16px", fontWeight:"600"}}
                        >
                          Judul Chapter
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`chapter-title-${chapterIndex}`}
                          placeholder="Text"
                          value={chapter.chapterTitle}
                          style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
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
                          key={`${chapterIndex}-${subjectIndex}`}
                          className="bg-light p-3 mb-3 rounded"
                        >
                          <h6 style={{fontWeight:"700"}}>Subject {subject.subjectNo}</h6>
                          <div className="mb-3">
                            <label
                              htmlFor={`video-title-${chapterIndex}-${subjectIndex}`}
                              className="form-label"
                              style={{fontSize:"16px", fontWeight:"600"}}
                            >
                              Judul Subject
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`video-title-${chapterIndex}-${subjectIndex}`}
                              value={subject.videoTitle}
                              placeholder="Text"
                              style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
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
                              style={{fontSize:"16px", fontWeight:"600"}}
                            >
                              Link Video Subject
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`video-link-${chapterIndex}-${subjectIndex}`}
                              value={subject.videoLink}
                              placeholder="Text"
                              style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
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
                              style={{fontSize:"16px", fontWeight:"600"}}
                            >
                              Tipe Subject
                            </label>
                            <select
                              className="form-select"
                              id={`subject-type-${chapterIndex}-${subjectIndex}`}
                              value={subject.subjectType}
                              style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
                              onChange={(e) =>
                                handleChapterInputChange(
                                  "subjectType",
                                  e.target.value,
                                  chapterIndex,
                                  subjectIndex
                                )
                              }
                            >
                              <option value="">Pilih Tipe Subject</option>
                              <option value="GRATIS">Gratis</option>
                              <option value="PREMIUM">Premium</option>
                            </select>
                          </div>
                          <button
                            type="button"
                            className="btn"
                            style={{borderRadius:"25px", backgroundColor: `var(--allert-red`, color: "#fff", fontFamily:"Montserrat", fontWeight:"500"}}
                            onClick={() =>
                              removeSubject(chapterIndex, subjectIndex)
                            }
                          >
                            Hapus Subject
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn"
                        style={{borderRadius:"25px", backgroundColor: `var(--allert-green`, color: "#fff", fontFamily:"Montserrat", fontWeight:"500"}}
                        onClick={() => addSubject(chapterIndex)}
                      >
                        Tambah Subject
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

                </form>
              </div>
              <div className="modal-footer" style={{borderTop:"none"}}>
                <button
                  type="button"
                  className="btn rounded-pill text-light"
                  style={{backgroundColor: `var(--allert-red`, color: "#fff", fontFamily:"Montserrat", fontWeight:"700"}} 
                  data-bs-dismiss="modal"
                >
                  Batal
                </button>
                <button
                    type="button"
                    className="btn rounded-pill text-light"
                    style={{ backgroundColor: `var(--primary-purple)`, color: "#fff", fontFamily:"Montserrat", fontWeight:"700" }}
                    onClick={handleSubmit}
                  >
                    Simpan
                  </button>
              </div>
            </div>
          </div>
          <style>{`
          label{
            font-weight: 500
          }
          @media only screen and (max-width: 600px) {
            .no-text .text {
              font-size: 0;
            }
          }
          
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default ModalAddClass;
