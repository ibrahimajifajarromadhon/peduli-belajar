import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal } from 'bootstrap'; 
import ModalAddClass from './ModalAddClass';
import { CiFilter } from 'react-icons/ci';
import Cookies from 'js-cookie';
import axios from 'axios';
import AdminDashboard from '../pages/AdminDashboard';

function ButtonAddFilter() {
  const location = useLocation();
  const isMyClassRoute = location.pathname === '/admin/class';
  const isDashboardRoute = location.pathname === '/admin/dashboard';
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filter, setFilter] = useState([]);

  const filterOptions = isMyClassRoute
    ? [
        { label: 'Kelas Premium', value: 'kelas-premium' },
        { label: 'Kelas Gratis', value: 'kelas-gratis' },
      ]
    : isDashboardRoute
    ? [
        { label: 'Sudah Bayar', value: 'sudah-bayar' },
        { label: 'Belum Bayar', value: 'belum-bayar' },
      ]
    : [];

  const modalRef = useRef(null);

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    setFilter(value);
    const modal = new Modal(modalRef.current);
    modal.hide();
  };

  useEffect(() => {
    const modal = new Modal(modalRef.current);
    modalRef.current.addEventListener('hidden.bs.modal', function () {
      setSelectedFilter(''); 
    });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    };

    return () => {
      modal.dispose();
    };
  }, []);

  return (
    <div className={`d-flex flex-row gap-4 w-100 my-lg-4 px-3 justify-content-end`} style={{ marginBottom: '20px' }}>
      {isMyClassRoute && <ModalAddClass className="d-lg-flex" />}
      <div className="position-relative">
        <button
          className="btn rounded-pill"
          style={{
            borderColor: `var(--primary-purple)`,
            color: `var(--primary-purple)`,
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          onClick={() => {
            const modal = new Modal(modalRef.current);
            modal.show();
          }}
        >
          <span>
            <CiFilter style={{ marginRight: '0.5em', color: `var(--primary-purple)` }} />
          </span>
          Filter
        </button>

        <div className="modal" ref={modalRef} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Filter Options</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`btn btn-light w-100 my-2 ${selectedFilter === option.value ? 'active' : ''}`}
                    onClick={() => handleFilterChange(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <AdminDashboard filter={filter}/>
          </div>
        </div>
      </div>
      <style>{`
        .rounded-pill{
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}

export default ButtonAddFilter;
