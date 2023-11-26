import React from 'react';

const UsersActivity = () => {
  return (
    <div className="activity-container">
      <div className="card">
        {/* Isi Card 1 */}
      </div>
      <div className="card">
        {/* Isi Card 2 */}
      </div>
      <div className="card">
        {/* Isi Card 3 */}
      </div>
  
      <style jsx>{`
        .activity-container {
          display: flex;
          justify-content: space-around;
          padding: 24px;
        }

        .card {
          width: 3em;
          height: 108px;
          border-radius: 15px;
          padding: 24px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }
      `}</style>
      <p>halo</p>
    </div>
    
  );
};

export default UsersActivity;
