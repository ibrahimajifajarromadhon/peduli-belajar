import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ModalAddClass from './ModalAddClass';
import { CiFilter } from 'react-icons/ci';

function ButtonAddFilter() {
  const location = useLocation();
  const isMyClassRoute = location.pathname === '/admin/class';

  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');

  const filterOptions = [
    { label: 'Sudah Bayar', value: 'sudah-bayar' },
    { label: 'Belum Bayar', value: 'belum-bayar' },
    { label: 'Kelas Premium', value: 'kelas-premium' },
    { label: 'Kelas Gratis', value: 'kelas-gratis' },
  ];

  const dropdownRef = useRef(null);

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    setShowFilterDropdown(false);
    // Add your filter logic here
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowFilterDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`d-flex flex-row gap-4 w-100 my-lg-4 px-5 justify-content-end`}>
      {isMyClassRoute && <ModalAddClass className="d-lg-flex" />}
      <div className="position-relative" ref={dropdownRef}>
        <button
          className="btn rounded-pill"
          style={{
            borderColor: `var(--primary-purple)`,
            color: `var(--primary-purple)`,
          }}
          onClick={() => setShowFilterDropdown(!showFilterDropdown)}
        >
          <span>
            <CiFilter
              style={{ marginRight: '0.5em', color: `var(--primary-purple)` }}
            />
          </span>
          filter
        </button>

        {showFilterDropdown && (
          <div className="dropdown-menu" style={{ position: 'absolute', zIndex: 1 }}>
            {filterOptions.map((option) => (
              <button
                key={option.value}
                className="dropdown-item"
                onClick={() => handleFilterChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ButtonAddFilter;
