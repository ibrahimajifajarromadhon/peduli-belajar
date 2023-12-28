import { useEffect, useState } from "react";
import getDetailCourse from "../api/getDetailsCourse";
import updateCourse from "../api/updateCourse";
import { toast } from "react-hot-toast";
import { BsUpload } from "react-icons/bs";
import updatedChapter from "../api/updatedChapter";
import updatedSubject from "../api/updatedSubject";
import addChapterUpdate from "../api/addChapterUpdate";
import addSubjectUpdate from "../api/addSubjectUpdate";
// import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
// import getDetailChapter from "../api/getDetailChapter";
// import { FaVihara } from "react-icons/fa";

function UpdateCourse({ courseCode, handleCloseModal }) {
  const [detail, setDetail] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [isPriceDisabled, setIsPriceDisabled] = useState(false);
  const [showDetailSubject, setShowDetailSubject] = useState(false);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
  // const [detailChapter, setDetailChapter] = useState();
  // const [chapterDetail, setChapterDetail] = useState();
  // const [passCode, setPassCode] = useState();
  // const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);
  // const [isAddSubjectVisible, setIsAddSubjectVisible] = useState(false);

  //Logic untuk Update yang atas
  useEffect(() => {
    const fetchData = async (courseCode) => {
      try {
        const response = await getDetailCourse(courseCode);
        setDetail(response);
      } catch (error) {
        console.log("error fetch data", error.message);
        throw error;
      }
    };
    fetchData(courseCode);
  }, [courseCode]);

  const handleUpdate = () => {
    const promises = [];

    const updatedClass = {
      title: detail.data.title,
      courseCode: detail.data.courseCode,
      category: {
        categoryName: detail.data.category,
      },
      type: detail.data.type,
      level: detail.data.level,
      price: detail.data.price,
      description: detail.data.description,
      telegramLink: detail.data.telegramLink,
    };

    promises.push(updateCourse(courseCode, updatedClass));

    const updatedChapters = [...detail.data.chapter];

    updatedChapters.forEach((chapter) => {
      if (chapter.id) {
        promises.push(
          updatedChapter(chapter.id, {
            chapterNo: chapter.chapterNo,
            chapterTitle: chapter.chapterTitle,
          })
        );
        if (chapter.subject.length !== 0) {
          chapter.subject.forEach((subject) => {
            if (subject.id) {
              promises.push(
                updatedSubject(subject.id, {
                  subjectNo: subject.subjectNo,
                  videoTitle: subject.videoTitle,
                  videoLink: subject.videoLink,
                  subjectType: subject.subjectType,
                })
              );
            } else {
              promises.push(
                addSubjectUpdate(chapter.id, {
                  subjectNo: subject.subjectNo,
                  videoTitle: subject.videoTitle,
                  videoLink: subject.videoLink,
                  subjectType: subject.subjectType,
                })
              );
            }
          });
        }
      } else {
        promises.push(
          addChapterUpdate(detail.data.id, {
            chapterNo: chapter.chapterNo,
            chapterTitle: chapter.chapterTitle,
            subject: chapter.subject,
          })
        );
      }
    });

    Promise.all(promises)
      .then(() => {
        toast.success("Berhasil ubah data course");
        handleCloseModal();
        window.location.reload();
      })
      .catch(() => {
        toast.error("Gagal ubah data course");
      });
  };

  const handleInputChange = (field, value) => {
    if (isEditing) {
      setDetail((prevDetail) => ({
        ...prevDetail,
        data: {
          ...prevDetail.data,
          [field]: value,
        },
      }));
    }
  };
  //Logic untuk update yang atas

  //logic untuk update chapter

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getDetailChapter(chapterId);
  //       console.log(response);
  //       setDetailChapter(response);
  //     } catch (error) {
  //       console.log("error fetch data", error.message);
  //       throw error;
  //     }
  //   };
  //   fetchData();
  // }, [chapterId]);

  const handleUpdateChapter = (chapterId) => {
    const updatedChapterData = {
      chapterNo: detail.data.chapter[chapterId].chapterNo,
      chapterTitle: detail.data.chapter[chapterId].chapterTitle,
    };
    updateChapterData(chapterId, updatedChapterData);
  };

  const updateChapterData = async (chapterId, updatedChapter) => {
    try {
      await updatedChapter(chapterId, updatedChapter);
      toast.success("Berhasil ubah chapter");
    } catch (error) {
      toast.error("Gagal ubah chapter");
      console.log("Gagal ubah chapter", error.message);
    }
  };

  const addChapter = () => {
    if (isEditing) {
      setDetail((prevDetail) => {
        return {
          ...prevDetail,
          data: {
            ...prevDetail.data,
            chapter: [
              ...(prevDetail.data.chapter || []),
              {
                chapterNo:
                  (prevDetail.data.chapter
                    ? prevDetail.data.chapter.length
                    : 0) + 1,
                chapterTitle: "",
                subject: [],
              },
            ],
          },
        };
      });
    }
  };
  // const handleUpdateChapter = async () => {
  //   try {
  //     const updateChapter = {
  //       categoryNo: getDetail.data.category.categoryNo,
  //       categoryName : getDetail.data.category.categoryName

  //     }
  //     await updateChapter(couresId, updateChapter)
  //     toast.success("Berhasil Update Chapter")
  //   }catch(error){
  //     toast.error("Error")
  //   }
  // }
  //logic untuk update chapter

  // const [classData, setClassData] = useState({
  //     chapterNo:
  //         (detail && detail.data && detail.data.chapter
  //             ? Math.max(...detail.data.chapter.map((chap) => chap.chapterNo))
  //             : 0) + 1,

  //     chapterTitle: "",
  //     subject: [],
  // });

  const addSubject = (chapterIndex) => {
    setDetail((prevDetail) => {
      const updatedChapters = [...prevDetail.data.chapter];
      if (chapterIndex >= 0 && chapterIndex < updatedChapters.length) {
        const maxSubjectNo = Math.max(
          ...updatedChapters.flatMap((chapter) =>
            chapter.subject.map((subject) => subject.subjectNo)
          ),
          0
        );
        const newSubject = {
          // subjectNo: updatedChapters[chapterIndex].subject.length + 1,
          subjectNo: maxSubjectNo + 1,
          videoTitle: "",
          videoLink: "",
          subjectType: "",
        };
        updatedChapters[chapterIndex].subject.push(newSubject);
      }
      return {
        ...prevDetail,
        data: {
          ...prevDetail.data,
          chapter: updatedChapters,
        },
      };
    });
  };

  const handleChapterInputChange = (
    field,
    value,
    chapterIndex,
    subjectIndex
  ) => {
    if (isEditing) {
      setDetail((prevDetail) => {
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

  const showSubjectDetail = (chapterIndex) => {
    setShowDetailSubject(true);
    setSelectedChapterIndex(chapterIndex);
  };

  const toggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <div className="w-100">
          <div className="d-flex flex-column mb-3">
            <label htmlFor="" style={{ fontSize: "16px", fontWeight: "600" }}>
              Nama Kelas
            </label>
            <input
              className="form-control"
              type="text"
              value={detail.data.title}
              style={{
                fontSize: "16px",
                fontWeight: "500",
                height: "48px",
                borderRadius: "13px",
              }}
              onChange={(e) => handleInputChange("title", e.target.value)}
              readOnly={!isEditing}
            />
          </div>

          <div className="d-flex flex-column mb-3">
            <label
              htmlFor=""
              className="mb-2"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Kategori
            </label>
            <select
              id="category-name"
              type="text"
              className="form-select"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                height: "48px",
                borderRadius: "13px",
              }}
              value={detail.data.category.categoryName}
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

          <div className="d-flex flex-column mb-3">
            <label
              htmlFor=""
              className="mb-2"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Kode Kelas
            </label>
            <input
              className="form-control"
              type="text"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                height: "48px",
                borderRadius: "13px",
              }}
              value={detail.data.courseCode}
              onChange={(e) => handleInputChange("courseCode", e.target.value)}
              readOnly
            />
          </div>

          <div className="d-flex flex-column mb-3">
            <label
              htmlFor=""
              className="mb-2"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
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
                  value={detail.data.type}
                  checked={detail.data.type === "GRATIS"}
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
                  value={detail.data.type}
                  checked={detail.data.type === "PREMIUM"}
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

          <div className="d-flex flex-column mb-3">
            <label
              htmlFor=""
              className="mb-2"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Teacher
            </label>
            <input
              className="form-control"
              type="text"
              value={detail.data.teacher}
              style={{
                fontSize: "16px",
                fontWeight: "500",
                height: "48px",
                borderRadius: "13px",
              }}
              readOnly          
              />
          </div>

          <div className="d-flex flex-column mb-3">
            <label
              htmlFor=""
              className="mb-2"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Level
            </label>
            <select
              className="form-select"
              value={detail.data.level}
              style={{
                fontSize: "16px",
                fontWeight: "500",
                height: "48px",
                borderRadius: "13px",
              }}
              onChange={(e) => handleInputChange("level", e.target.value)}
              readOnly={!isEditing}
            >
              <option value="BEGINNER">Beginner</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="ADVANCE">Advance</option>
            </select>
          </div>

          <div className="d-flex flex-column mb-3">
            <label
              htmlFor=""
              className="mb-2"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Harga
            </label>
            <input
              className="form-control"
              type="number"
              value={isPriceDisabled ? 0 : detail.data.price}
              style={{
                fontSize: "16px",
                fontWeight: "500",
                height: "48px",
                borderRadius: "13px",
              }}
              onChange={(e) => handleInputChange("price", e.target.value)}
              disabled={isPriceDisabled}
              readOnly={!isEditing}
            />
          </div>

          <div className="d-flex flex-column mb-3">
            <label
              htmlFor=""
              className="mb-2"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Link Telegram
            </label>
            <input
              type="text"
              className="form-control"
              value={detail.data.telegramLink}
              style={{
                fontSize: "16px",
                fontWeight: "500",
                height: "48px",
                borderRadius: "13px",
              }}
              onChange={(e) =>
                handleInputChange("telegramLink", e.target.value)
              }
              readOnly={!isEditing}            
              />
          </div>

          <div className="d-flex flex-column mb-3">
            <label
              htmlFor=""
              className="mb-2"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Deskripsi
            </label>
            <textarea
              className="form-control"
              value={detail.data.description}
              style={{
                fontSize: "16px",
                fontWeight: "500",
                height: "120px",
                borderRadius: "13px",
              }}
              onChange={(e) => handleInputChange("description", e.target.value)}
              readOnly={!isEditing}
            />
          </div>

          {detail.data.chapter.map((chapter, chapterIndex) => (
            <div
              key={chapterIndex}
              className="bg-success-subtle p-3 mb-3 rounded mt-4"
            >
              <h5 style={{ fontWeight: "700" }}>Chapter {chapter.chapterNo}</h5>

              <div className="mb-3">
                <label
                  htmlFor={`chapter-title-${chapterIndex}`}
                  className="form-label"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  Judul Chapter
                </label>{" "}
                <input
                  className="form-control position-relative"
                  type="text"
                  value={chapter.chapterTitle}
                  placeholder="Text"
                  style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
                  onChange={(e) =>
                    handleChapterInputChange(
                      "chapterTitle",
                      e.target.value,
                      chapterIndex
                    )
                  }
                  readOnly={!isEditing}
                />
              </div>
              {showDetailSubject && selectedChapterIndex === chapterIndex && (
                <div>
                  {chapter.subject.map((subject, subjectIndex) => (
                    <div key={`subject-${chapterIndex}-${subjectIndex}`} className="bg-light p-3 mb-3 rounded mt-2">
                      <h6 style={{fontWeight:"700"}}>Subject {subject.subjectNo}</h6>
                        <div className="mb-3">
                          <label htmlFor="" className="mb-2" style={{fontSize:"16px", fontWeight:"600"}}>
                            Judul Subject
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text"
                            value={subject.videoTitle}
                            style={{fontSize:"16px", fontWeight:"500", height:"48px", borderRadius:"13px"}}
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

                        <div className="d-flex flex-column mb-3">
                          <label htmlFor="" className="mb-2" style={{fontSize:"16px", fontWeight:"600"}}>
                            Link Video Subject
                          </label>

                          <input
                            className="form-control"
                            type="text"
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
                            readOnly={!isEditing}
                          />
                        </div>

                        <div>
                        <label htmlFor="" className="mb-2" style={{fontSize:"16px", fontWeight:"600"}}>
                          Tipe Subject
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
                              checked={
                                isPriceDisabled ||
                                subject.subjectType === "GRATIS"
                              }
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
                              checked={
                                !isPriceDisabled &&
                                subject.subjectType === "PREMIUM"
                              }
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
                  ))}
                </div>
              )}
              <hr style={{ marginTop: "2em" }} />
              <div className="d-flex justify-content-between">
                <button
                  onClick={() => showSubjectDetail(chapterIndex)}
                  className="btn my-1"
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#F9CC00",
                    color: "#fff",
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                  }}
                >
                  Detail Subject
                </button>
                <button
                  className="btn my-1"
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#73CA5C",
                    color: "#fff",
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                  }}
                  onClick={() => addSubject(chapterIndex)}
                >
                  Tambah Subject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="btn"
        onClick={addChapter}
        style={{
          borderRadius: "25px",
          backgroundColor: `var(--primary-blue)`,
          color: "#fff",
          fontFamily: "Montserrat",
          fontWeight: "600",
        }}
      >
        Tambah Chapter
      </button>
      <div className="d-flex justify-content-end">
      <button
          onClick={toggleEdit}
          className="btn my-4 fw-bold text-light"
          style={{ borderRadius:"25px", marginRight: "1em", backgroundColor: `var(--allert-red)` }}
        >
          {isEditing ? "Batal Ubah" : "Ubah"}
        </button>
        {isEditing && (
          <button
            onClick={handleUpdate}
            className="btn text-light my-4 fw-bold"
            style={{ borderRadius:"25px", backgroundColor: `var(--primary-purple)` }}
          >
            Simpan
          </button>
        )}
      </div>
    </>
  );
}

export default UpdateCourse;
