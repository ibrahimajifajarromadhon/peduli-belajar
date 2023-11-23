import React from "react";
import TableAdmin from "../components/TableAdmin";

function AdminDashboard() {
  const data = [
    {
      "first_name": "John",
      "last_name": "Nelson",
      "email": "john_nelson@live.com"
    },
    {
      "first_name": "Rebecca",
      "last_name": "Johnson",
      "email": "rebecca_johnson@aol.com"
    },
    {
      "first_name": "Benjamin",
      "last_name": "Lewis",
      "email": "benjamin@hotmail.com"
    },
    {
      "first_name": "Jason",
      "last_name": "King",
      "email": "j_king@live.com"
    },
    {
      "first_name": "Owen",
      "last_name": "Davis",
      "email": "owenjdavis@live.com"
    },
    {
      "first_name": "Thomas",
      "last_name": "Evans",
      "email": "thomas.evans34@hotmail.com"
    },
    {
      "first_name": "Melissa",
      "last_name": "Wilson",
      "email": "melissa@hotmail.com"
    },
    {
      "first_name": "Tiffany",
      "last_name": "Taylor",
      "email": "t_taylor@live.com"
    },
    {
      "first_name": "Michelle",
      "last_name": "Bennett",
      "email": "m.m.bennett@gmail.com"
    },
    {
      "first_name": "Heather",
      "last_name": "Peterson",
      "email": "hpeterson@yahoo.com"
    }
  ];

  return (
    <>
      
      <TableAdmin data={data} />
    </>
  );
}

export default AdminDashboard;
