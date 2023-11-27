import React from 'react';
import { useLocation } from 'react-router-dom';
import ModalAddClass from './ModalAddClass';
import { CiFilter } from 'react-icons/ci';

function ButtonAddFilter() {
  // Get the current location
  const location = useLocation();

  // Check if the current route is "/myclass"
  const isMyClassRoute = location.pathname === '/admin/class';

  return (
    <div
      className={`d-flex flex-row gap-4 w-100 my-lg-4 px-5 ${
        isMyClassRoute ? 'justify-content-end' : 'justify-content-end'
      }`}
    >
      {isMyClassRoute && <ModalAddClass className="d-lg-flex" />}
      <button
        className="btn rounded-pill"
        style={{
          borderColor: `var(--primary-purple)`,
          color: `var(--primary-purple)`,
        }}
      >
        <span>
          <CiFilter
            style={{ marginRight: '0.5em', color: `var(--primary-purple)` }}
          />
        </span>
        filter
      </button>
    </div>
  );
}

export default ButtonAddFilter;
