import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import Cookies from "js-cookie";
import { FaArrowLeft } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaCirclePlay } from "react-icons/fa6";
import { PiLockKeyFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { FaAddressBook } from "react-icons/fa";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import ModalBuyPremium from "../../components/user/ModalBuyPremium";
import Centang from "../../assets/centang.png";
import { FaSackDollar } from "react-icons/fa6";

const DetailCourse = () => {
  const { courseCode } = useParams();
  const [dataCourse, setDataCourse] = useState(null);
  const [watchedSubjects, setWatchedSubjects] = useState([]);
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const detailApiUrl = `${import.meta.env.VITE_API}/api/course/${courseCode}`;

    const token = Cookies.get("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(detailApiUrl, config)
      .then((response) => {
        setDataCourse(response.data.data);
        setWatchedSubjects(
          new Array(
            response.data.data.chapter[currentChapterIndex].subject.length
          ).fill(false)
        );
      })
      .catch((error) => {
        throw error;
      });
  }, [courseCode, currentChapterIndex]);

  useEffect(() => {
    const progressApiUrl = `${
      import.meta.env.VITE_API
    }/api/course/progress/${courseCode}`;
    const token = Cookies.get("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(progressApiUrl, config)
      .then((response) => {
        setProgress(response.data.data.percent);
      })
      .catch((error) => {
        throw error;
      });
  }, [courseCode, currentChapterIndex]);

  const progressBarWidth = `${progress}%`;

  if (!dataCourse) {
    return <p>Loading...</p>;
  }

  const currentChapter = dataCourse.chapter[currentChapterIndex];
  const currentSubject = currentChapter.subject[currentSubjectIndex];

  const VIDEO_PATH = `${import.meta.env.VITE_API}/api/course/${
    currentSubject.videoLink
  }`;

  const handleVideoEnded = async () => {
    setWatchedSubjects((prevWatched) => {
      const newWatched = [...prevWatched];
      newWatched[currentSubjectIndex] = true;
      return newWatched;
    });

    const isPremiumCourse = dataCourse.type === "PREMIUM";
    const isLastSubjectInChapter =
      currentSubjectIndex === currentChapter.subject.length - 1;
    const areAllSubjectsWatched = watchedSubjects.every((watched) => watched);

    if (isPremiumCourse && isLastSubjectInChapter && areAllSubjectsWatched) {
      if (currentChapterIndex < dataCourse.chapter.length - 1) {
        setCurrentChapterIndex((prevIndex) => prevIndex + 1);
        setCurrentSubjectIndex(0);
      } else {
        console.log("Course completed!");
      }
    } else if (currentSubjectIndex < currentChapter.subject.length - 1) {
      setCurrentSubjectIndex((prevIndex) => prevIndex + 1);
    } else if (currentChapterIndex < dataCourse.chapter.length - 1) {
      setCurrentChapterIndex((prevIndex) => prevIndex + 1);
      setCurrentSubjectIndex(0);
    }

    const postData = {
      courseCode,
      subjectId: currentSubject.id,
    };

    const progressApiUrl = `${
      import.meta.env.VITE_API
    }/api/user/progress?courseCode=${postData.courseCode}&subjectId=${
      postData.subjectId
    }`;

    try {
      await axios.post(progressApiUrl, postData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      const updatedProgressApiUrl = `${
        import.meta.env.VITE_API
      }/api/course/progress/${courseCode}`;
      const updatedProgressResponse = await axios.get(updatedProgressApiUrl, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      setProgress(updatedProgressResponse.data.data.percent);
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  const handleClosePremiumModal = () => {
    setShowPremiumModal(false);
  };

  const handlePremiumButtonClick = () => {
    setShowPremiumModal(true);
  };

  return (
    <>
      <Header />
      <div className="wrapper" style={{ fontFamily: "Montserrat" }}>
        <div className="container" style={{ marginTop: "60px" }}>
          <Link
            to={`/allCourseClass`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div
              className="d-flex"
              style={{ textDecoration: "none", color: "black" }}
            >
              <FaArrowLeft
                style={{ marginTop: "30px", marginBottom: "10px" }}
              />
              <p
                style={{
                  margin: "0px",
                  marginTop: "25px",
                  fontWeight: "700",
                  marginLeft: "15px",
                  marginBottom: "10px",
                }}
              >
                Kelas Lainnya
              </p>
            </div>
          </Link>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex" style={{ margin: "0px" }}>
            <a
              href="#"
              style={{
                margin: "0px",
                padding: "0px",
                textDecoration: "none",
                color: "#6148FF",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              {dataCourse.category.categoryName.replace(/_/g, " ")}
            </a>
            <div className="ms-auto" style={{ fontWeight: "700" }}>
              <FaStar style={{ color: "#F9CC00", marginBottom: "5px" }} /> 5.0
            </div>
          </div>
          <div className="col-7 column-header">
            <h2
              style={{
                fontWeight: "700",
                margin: "0px",
                fontSize: "20px",
                marginTop: "5px",
              }}
            >
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                {dataCourse.title}
              </a>
            </h2>
            <p
              style={{
                margin: "0px",
                marginTop: "10px",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                by {dataCourse.teacher}
              </a>
            </p>
            <div className="d-flex" style={{ marginTop: "10px" }}>
              <RiShieldStarLine style={{ color: "#73CA5C" }} />{" "}
              <p
                style={{
                  textDecoration: "none",
                  color: "#6148FF",
                  fontSize: "11px",
                  fontWeight: "600",
                }}
              >
                {dataCourse.level} LEVEL
              </p>
              <RiBook3Line style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
              <p
                style={{
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: "600",
                }}
              >
                {dataCourse.modul} Modul
              </p>
              <RiTimeFill style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
              <p
                style={{
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: "600",
                }}
              >
                100 Menit
              </p>
            </div>
          </div>

          <div className="gap-2 btn-gabungan">
            <button
              className="btn"
              style={{
                backgroundColor: "#73CA5C",
                borderRadius: "25px",
                height: "40px",
                padding: "5px",
                marginRight: "5px",
                fontWeight: "700",
                color: "#fff",
                width: "100%",
                marginBottom: "5px",
                textDecoration: "none",
              }}
            >
              <a
                href={dataCourse.telegramLink}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Join Grup Telegram
              </a>
              <HiOutlineChatAlt2 style={{ marginLeft: "5px" }} />
            </button>
            <button
              className="btn"
              onClick={handlePremiumButtonClick}
              style={{
                backgroundColor: "#6148FF",
                borderRadius: "25px",
                height: "40px",
                padding: "5px",
                fontWeight: "700",
                color: "#fff",
                width: "100%",
                marginBottom: "5px",
              }}
            >
              Premium Course
              <FaSackDollar style={{ marginLeft: "10px" }} />
            </button>
            <div className="offcanvas offcanvas-end" id="demo">
              <div className="offcanvas-header">
                <h4 className="offcanvas-title">Materi Belajar</h4>                
                <div className="col-6 d-flex justify-content-center">
                  <div>
                    <img
                      src={Centang}
                      alt=""
                      style={{ width: "1.3em", height: "1.2em" }}
                    />
                  </div>
                  <div
                    className="progress h-75"
                    role="progressbar"
                    aria-label="Info example"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ borderRadius: "25px", marginLeft: "5px" }}
                  >
                    <div
                      className="progress-bar text-white"
                      style={{
                        width: progressBarWidth,
                        fontWeight: "600",
                        backgroundColor: "#6148FF",
                        borderRadius: "25px",
                      }}
                    >
                      <div style={{ padding: "0px 20px 0px 20px" }}>
                        {progress}% complete
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div
                  className="col-md-5 order-md-2 wrapper p-4"
                  style={{
                    height: "auto",
                    width: "auto",
                    backgroundColor: "white",
                    borderRadius: "15px",
                    boxShadow: "0 0 0 2px whitesmoke",
                  }}
                >
                  <div style={{ margin: "15px", position: 'relative' }}>
                    <ol style={{ marginLeft: "-15px", marginTop: "18px" }}>
                      {dataCourse.chapter.map((chapter, chapterIndex) => (
                        <React.Fragment key={chapterIndex}>
                          <p style={{ marginTop: "15px", marginLeft: "-18px" }}>
                            <a
                              href="#"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                textDecoration: "none",
                                color: "#6148FF",
                                fontSize: "15px",
                                fontWeight: "700",
                              }}
                            >
                              Chapter {chapter.chapterNo} -{" "}
                              {chapter.chapterTitle}
                            </a>
                          </p>
                          {chapter.subject.map((subject, subjectIndex) => (
                            <React.Fragment key={subjectIndex}>
                              <li
                                style={{
                                  fontWeight: "400",
                                  fontSize: "15px",
                                  marginBottom: "10px",
                                  position: "relative",
                                  maxWidth: "calc(100% - 20px)",
                                  
                                }}
                              >
                                {subject.videoTitle}
                                {subject.videoLink === "" ? (
                                  <PiLockKeyFill
                                    style={{
                                      marginLeft: "15px",
                                      color: "#D9D9D9",
                                      width: "20px",
                                      height: "20px",
                                      position: "absolute",
                                      top: 0,
                                      right: 0,
                                    }}
                                  />
                                ) : (
                                  <FaCirclePlay
                                    style={{
                                      marginLeft: "15px",
                                      color: subject.done
                                        ? "#73CA5C"
                                        : "#6148FF",
                                      width: "20px",
                                      height: "20px",
                                      position: "absolute",
                                      top: 0,
                                      right: 0,
                                    }}
                                  />
                                )}
                              </li>
                              <hr />
                            </React.Fragment>
                          ))}
                        </React.Fragment>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn-1"
              type="button"
              style={{
                backgroundColor: "#6148FF",
                borderRadius: "25px",
                height: "40px",
                padding: "5px",
                fontWeight: "700",
                color: "#fff",
                width: "100%",
                marginBottom: "5px",
                border: 'none'
              }}
              data-bs-toggle="offcanvas"
              data-bs-target="#demo"
            >
              Materi Belajar <FaAddressBook style={{ margin: "1px" }} />
            </button>
          </div>
        </div>
      </div>
      <div className="container" style={{ fontFamily: "Montserrat" }}>
        <div className="row">
          <div className="col-md-7 order-md-1">
            <div className="player-wrapper" style={{ position: "relative" }}>
              <ReactPlayer
                url={VIDEO_PATH}
                className="player"
                onEnded={handleVideoEnded}
                controls
                width="100%"
                style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", top: 0, left: 0 }}
              />
            </div>
            <div style={{ marginTop: "30px", marginBottom: "50px" }}>
              <h2 style={{ fontWeight: "700", fontSize: "25px" }}>
                Tentang Kelas
              </h2>
              <p
                style={{
                  fontWeight: "450",
                  fontSize: "13px",
                  lineHeight: "30px",
                }}
              >
                {dataCourse.description}
              </p>
              <br />
              <h2 style={{ fontWeight: "700", fontSize: "25px" }}>
                Kelas Ini Ditujukan Untuk
              </h2>
              <p
                style={{
                  fontWeight: "450",
                  fontSize: "13px",
                  lineHeight: "30px",
                }}
              >
                1. Anda yang ingin memahami poin penting design system
                <br />
                2. Anda yang ingin membantu perusahaan lebih optimal dalam
                membuat design produk
                <br />
                3. Anda yang ingin latihan membangun design system
                <br />
                4. Anda yang ingin latihan membangun design system
                <br />
              </p>
            </div>
          </div>
          <div
            className="col-md-5 order-md-2 p-4 materi"
            style={{
              height: "50%",
              width: "40%",
              backgroundColor: "white",
              borderRadius: "15px",
              marginTop: "-180px",
              marginLeft: "5px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ margin: "1px", fontFamily: "Montserrat" }}>
              <div className="row">
                <div className="col-6">
                  <h2 style={{ fontWeight: "700", fontSize: "20px" }}>
                    Materi Belajar
                  </h2>
                </div>
                <div className="col-6 d-flex justify-content-center">
                  <div>
                    <img
                      src={Centang}
                      alt=""
                      style={{ width: "1.3em", height: "1.2em" }}
                    />
                  </div>
                  <div
                    className="progress h-75"
                    role="progressbar"
                    aria-label="Info example"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ borderRadius: "25px", marginLeft: "5px" }}
                  >
                    <div
                      className="progress-bar text-white"
                      style={{
                        width: progressBarWidth,
                        fontWeight: "600",
                        backgroundColor: "#6148FF",
                        borderRadius: "25px",
                      }}
                    >
                      <div style={{ padding: "0px 20px 0px 20px" }}>
                        {progress}% complete
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol style={{ marginLeft: "-15px", marginTop: "18px" }}>
                {dataCourse.chapter.map((chapter, chapterIndex) => (
                  <React.Fragment key={chapterIndex}>
                    <p style={{ marginTop: "25px", marginLeft: "-18px" }}>
                      <a
                        href="#"
                        style={{
                          margin: "0px",
                          padding: "0px",
                          textDecoration: "none",
                          color: "#6148FF",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        Chapter {chapter.chapterNo} - {chapter.chapterTitle}
                      </a>
                    </p>
                    {chapter.subject.map((subject, subjectIndex) => (
                      <React.Fragment key={subjectIndex}>
                        <li
                          style={{
                            fontWeight: "400",
                            fontSize: "15px",
                            marginBottom: "20px",
                            position: 'relative',
                          }}
                        >
                          {subject.videoTitle}
                          {subject.videoLink === "" ? (
                            <PiLockKeyFill
                              style={{
                                marginLeft: "15px",
                                color: "#D9D9D9",
                                width: "20px",
                                height: "20px",
                                position: 'absolute',
                                top: 0,
                                right: 0,
                              }}
                            />
                          ) : (
                            <FaCirclePlay
                              style={{
                                marginLeft: "15px",
                                color: subject.done ? "#73CA5C" : "#6148FF",
                                width: "20px",
                                height: "20px",
                                position: 'absolute',
                                top: 0,
                                right: 0,
                              }}
                            />
                          )}
                        </li>
                        <hr />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {showPremiumModal && (
          <>
            <ModalBuyPremium
              courseCode={courseCode}
              handleCloseModal={handleClosePremiumModal}
            />
          </>
        )}
        <style>
          {`
            @media (max-width: 768px) {
              .wrapper {
                height: auto;
              }

              .materi {
                display: none;
              }

              .player {
                max-width: 400px;
              }

              .offcanvas-title {
                font-weight: 700;
              }
              
              .column-header {
                width: auto;
              }

              .btn-gabungan {
                display: grid;
              }
            }

            @media (min-width: 769px) {
              .btn-1 {
                display: none;
              }

              .btn-gabungan {
                width: 32em;
                display: flex;
                justify-content: space-between;
              }
            }

            .wrapper {
              background-color: #EBF3FC;
              height: auto;
              padding-bottom: 1em;
            }
            
            .player {
              overflow: hidden;
              border-radius: 20px;
              border: 1px solid white;
              margin-top: 15px;
              max-width: auto;
            }

          `}
        </style>
      </div>
      <Footer />
    </>
  );
};

export default DetailCourse;
