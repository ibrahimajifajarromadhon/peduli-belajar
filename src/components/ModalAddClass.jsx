import React from "react";
import { CiCirclePlus } from "react-icons/ci";

function ModalAddClass() {
  return (
    <div className="class">
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn rounded-pill d-flex flex-row justify-content-between align-items-center text-light "
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
                      id="recipient-name"
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
                      Materi
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
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
                <button type="button" className="btn btn-primary rounded-pill">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @media (max-width: 628px) {
            .class .btn {
              width: 100% !important;
              height: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ModalAddClass;
