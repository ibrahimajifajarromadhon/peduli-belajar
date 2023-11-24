import React from "react";
import imgCourse from "../assets/image-course.png"

const ListCourse = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src={imgCourse} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">UI/UX Design</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={imgCourse} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Web Development</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={imgCourse} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Android Development</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={imgCourse} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Data Science</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCourse;
