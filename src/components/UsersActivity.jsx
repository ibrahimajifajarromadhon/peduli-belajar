import React from 'react';

const UsersActivity = () => {
  return (
    <div className="activity-container py-4 mb-4">
      <div className="card bg-warning-subtle">
        {/* Isi Card 1 */}
      </div>
      <div className="card bg-danger-subtle">
        {/* Isi Card 2 */}
      </div>
      <div className="card bg-success-subtle">
        {/* Isi Card 3 */}
      </div>

      <style jsx>{`
        .activity-container {
          display: flex;
          justify-content: space-around;
          padding: 24px;
          gap: 1em;
        }

        @media (max-width: 992px) {
          .activity-container {
            padding-top: 0 !important; 
          }
        }
        .card {
          width: 15em;
          height: 108px;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default UsersActivity;
