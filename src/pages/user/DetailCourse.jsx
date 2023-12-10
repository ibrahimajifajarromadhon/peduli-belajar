import React from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaCirclePlay } from "react-icons/fa6";
import { PiLockKeyFill } from "react-icons/pi";
import ReactPlayer from "react-player";
import { FaStar } from "react-icons/fa";
import { RiBook3Line } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { FaAddressBook } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from 'react';

const DetailCourse = () => {
  const telegramGroupUrl = "https://t.me/+g7QgBy1YNd40Zjc1";

  const { courseCode } = useParams();
  const [dataCourse, setDataCourse] = useState(null);

  useEffect(() => {
    const detailApiUrl = `${import.meta.env.VITE_API}/api/course/${courseCode}`;

    // const token = localStorage.getItem('token');

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // };

    axios.get(detailApiUrl)
      .then(response => {
        setDataCourse(response.data.data);
        console.log({response:response.data})
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [courseCode]);

  if (!dataCourse) {
    return <p>Loading...</p>;
  }
console.log({dataCourse})
  const VIDEO_PATH = `${import.meta.env.VITE_API}/api/course/${dataCourse.chapter[0].subject[0].videoLink}`;

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container" style={{ marginTop: "60px" }}>
          <Link
            to={`/allCourseClass`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <a
              className="d-flex"
              href="#"
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
            </a>
          </Link>
          <div className="col-7 d-flex" style={{ margin: "0px" }}>
            <a
              href="#"
              style={{
                margin: "0px",
                padding: "0px",
                textDecoration: "none",
                color: "#6148FF",
                fontSize: "15px",
                fontWeight: "800",
              }}
            >
              {dataCourse.category}
            </a>
            <div className="ms-auto" style={{ fontWeight: "700" }}>
              <FaStar style={{ color: "#F9CC00", marginBottom: "5px" }} /> 5.0
            </div>
          </div>

          <h2 style={{ fontWeight: "700", margin: "0px" }}>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
            {dataCourse.name}
            </a>
          </h2>
          <p style={{ fontWeight: "600", margin: "0px", marginTop: "5px" }}>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              by {dataCourse.author}
            </a>
          </p>
          <div className="d-flex" style={{ marginTop: "10px" }}>
            <RiShieldStarLine style={{ color: "#73CA5C" }} />{" "}
            <p
              style={{
                textDecoration: "none",
                color: "#6148FF",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {dataCourse.level} Level
            </p>
            <RiBook3Line style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
            <p
              style={{
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              10 Modul
            </p>
            <RiTimeFill style={{ color: "#73CA5C", marginLeft: "30px" }} />{" "}
            <p
              style={{
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              100 menit
            </p>
          </div>

          <a href={telegramGroupUrl}>
            <button
              className="btn"
              style={{
                backgroundColor: "#73CA5C",
                borderRadius: "25px",
                height: "40px",
                padding: "5px",
                width: "230px",
                marginRight: "5px",
                fontWeight: "700",
                color: "white",
              }}
            >
              Join Grup Telegram
              <HiOutlineChatAlt2 style={{ marginLeft: "5px" }} />
            </button>
          </a>
          <div className="offcanvas offcanvas-end" id="demo">
            <div className="offcanvas-header">
              <h1 className="offcanvas-title">Materi Belajar</h1>
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
                <div style={{ margin: "15px" }}>
                  <p style={{ marginTop: "10px" }}>
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
                      Chapter 1 - Pendahuluan
                    </a>
                  </p>
                  <ol style={{ marginLeft: "-15px", marginTop: "18px" }}>
                    <li
                      style={{
                        fontWeight: "400",
                        fontSize: "13px",
                        marginBottom: "20px",
                      }}
                    >
                      Tujuan Mengikuti Kelas Design System
                      <FaCirclePlay
                        style={{
                          marginLeft: "15px",
                          color: "#73CA5C",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </li>
                    <hr />
                    <li
                      style={{
                        fontWeight: "400",
                        fontSize: "13px",
                        marginBottom: "20px",
                      }}
                    >
                      Tujuan Mengikuti Kelas Design System
                      <FaCirclePlay
                        style={{
                          marginLeft: "15px",
                          color: "#73CA5C",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </li>
                    <hr />
                    <li
                      style={{
                        fontWeight: "400",
                        fontSize: "13px",
                        marginBottom: "20px",
                      }}
                    >
                      Tujuan Mengikuti Kelas Design System
                      <FaCirclePlay
                        style={{
                          marginLeft: "15px",
                          color: "#6148FF",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </li>
                    <hr />

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
                        Chapter 2 - Memulai Desain
                      </a>
                    </p>
                    <li
                      style={{
                        fontWeight: "400",
                        fontSize: "13px",
                        marginBottom: "20px",
                      }}
                    >
                      Tujuan Mengikuti Kelas Design System
                      <PiLockKeyFill
                        style={{
                          marginLeft: "15px",
                          color: "#D9D9D9",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </li>
                    <hr />
                    <li
                      style={{
                        fontWeight: "400",
                        fontSize: "13px",
                        marginBottom: "20px",
                      }}
                    >
                      Tujuan Mengikuti Kelas Design System
                      <PiLockKeyFill
                        style={{
                          marginLeft: "15px",
                          color: "#D9D9D9",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </li>
                    <hr />
                    <li
                      style={{
                        fontWeight: "400",
                        fontSize: "13px",
                        marginBottom: "20px",
                      }}
                    >
                      Tujuan Mengikuti Kelas Design System
                      <PiLockKeyFill
                        style={{
                          marginLeft: "15px",
                          color: "#D9D9D9",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </li>
                    <hr />
                    <li
                      style={{
                        fontWeight: "400",
                        fontSize: "13px",
                        marginBottom: "20px",
                      }}
                    >
                      Tujuan Mengikuti Kelas Design System
                      <PiLockKeyFill
                        style={{
                          marginLeft: "15px",
                          color: "#D9D9D9",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <button
            className="btn button-materi"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            Materi Belajar <FaAddressBook style={{ margin: "1px" }} />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 order-md-1">
            <div className="player-wrapper">
              <ReactPlayer url={VIDEO_PATH} className="player" />
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
              width: "auto",
              backgroundColor: "white",
              borderRadius: "15px",
              marginTop: "-180px",
              marginLeft: "50px",
              boxShadow: "0 0 0 2px whitesmoke",
            }}
          >
            <div style={{ margin: "15px" }}>
              <div className="row">
              <div className="col-7">
                <h2 style={{ fontWeight: "700", fontSize: "20px" }}>
                  Materi Belajar
                </h2>
                

              </div>
              <div className="col-5">
              <div
              className="progress mt-2"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            <div className="progress-bar bg-success text-white" style={{width: "70%", fontWeight:"600"}}>
                70% complete
            </div>
                </div>
              </div>
              </div>
              {/* <p style={{ marginTop: "10px" }}>
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
                  Chapter {dataCourse.chapter.length > 0 && dataCourse.chapter[0].chapterNo} - {dataCourse.chapter.length > 0 && dataCourse.chapter[0].chapterTitle}
                </a>
              </p> */}
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
            }}
          >
            {subject.videoTitle}
            {subject.subjectType === 'FREE' ? (
              <FaCirclePlay
                style={{
                  marginLeft: "15px",
                  color: "#73CA5C",
                  width: "20px",
                  height: "20px",
                }}
              />
            ) : (
              <PiLockKeyFill
                style={{
                  marginLeft: "15px",
                  color: "#D9D9D9",
                  width: "20px",
                  height: "20px",
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

              {/* <ol style={{ marginLeft: "-15px", marginTop: "18px" }}>
                <li
                  style={{
                    fontWeight: "400",
                    fontSize: "15px",
                    marginBottom: "20px",
                  }}
                >
                  {dataCourse.chapter[0].subject[0].videoTitle}
                  <FaCirclePlay
                    style={{
                      marginLeft: "15px",
                      color: "#73CA5C",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </li>
                <hr />
                <li
                  style={{
                    fontWeight: "400",
                    fontSize: "15px",
                    marginBottom: "20px",
                  }}
                >
                  Tujuan Mengikuti Kelas Design System
                  <FaCirclePlay
                    style={{
                      marginLeft: "15px",
                      color: "#6148FF",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </li>
                <hr />

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
                    Chapter 2 - Memulai Desain
                  </a>
                </p>
                <li
                  style={{
                    fontWeight: "400",
                    fontSize: "15px",
                    marginBottom: "20px",
                  }}
                >
                  Tujuan Mengikuti Kelas Design System
                  <PiLockKeyFill
                    style={{
                      marginLeft: "15px",
                      color: "#D9D9D9",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </li>
                <hr />
              </ol> */}
            </div>
          </div>
        </div>
        <style>
          {`
            @media (max-width: 768px) {
              .wrapper {
                height: 500px;
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
              
              .button-materi  {
                background-color: #6148FF;
                color: #fff;
                font-weight: 700;
                border-radius: 25px;
              }
            }

            @media (min-width: 769px) {
              .button-materi {
                display: none;
              }
            }

            .wrapper {
              background-color: #EBF3FC;
              height: 270px;
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
