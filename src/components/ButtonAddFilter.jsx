import React from 'react'
import ModalAddClass from './ModalAddClass'
import { CiFilter } from "react-icons/ci";

function ButtonAddFilter() {
  return (
    <div>
       <div
          className="d-flex flex-row gap-4 w-100 my-4"
          style={{ justifyContent: "flex-end" }}
        >
          <ModalAddClass />
          <button
            className="btn rounded-pill"
            style={{
              borderColor: `var(--primary-purple)`,
              color: `var(--primary-purple)`,
            }}
          >
            <span>
              <CiFilter
                style={{ marginRight: "0.5em", color: `var(--primary-purple)` }}
              />
            </span>
            filter
          </button>
        </div>
    </div>
  )
}

export default ButtonAddFilter
