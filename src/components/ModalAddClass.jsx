import React from "react";
// import CiCirclePlus from "react-icons/ci"

function ModalAddClass() {
  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
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
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Upload Video
                </button>
                <button type="button" className="btn btn-primary">
                  Simpan
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
