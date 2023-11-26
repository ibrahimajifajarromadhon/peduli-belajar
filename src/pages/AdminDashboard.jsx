import React from "react";
import TableAdmin from "../components/TableAdmin";

function AdminDashboard() {
  const data = [
    {
      "first_name": "John",
      "last_name": "Nelson",
      "email": "john_nelson@live.com",
      "status": "belum bayar",
      "metode_pembayaran" : "Credit Card",
      "tanggal_bayar" : "11, agustus 2023"
    },
    {
      "first_name": "Rebecca",
      "last_name": "Johnson",
      "email": "rebecca_johnson@aol.com",
      "status": "belum bayar",
      "metode_pembayaran" : "Credit Card",
      "tanggal_bayar" : "11, agustus 2023"
    },
    {
      "first_name": "Benjamin",
      "last_name": "Lewis",
      "email": "benjamin@hotmail.com",
      "status": "belum bayar",
      "metode_pembayaran" : "Credit Card",
      "tanggal_bayar" : "11, agustus 2023"
    },
    {
      "first_name": "Jason",
      "last_name": "King",
      "email": "j_king@live.com",
      "status": "belum bayar",
      "metode_pembayaran" : "Credit Card",
      "tanggal_bayar" : "11, agustus 2023"
    },
    {
      "first_name": "Owen",
      "last_name": "Davis",
      "email": "owenjdavis@live.com",
      "status": "belum bayar",
      "metode_pembayaran" : "Credit Card",
      "tanggal_bayar" : "11, agustus 2023"
    },
  ];

  return (
    <>
      <TableAdmin data={data} />
    </>
  );
}

export default AdminDashboard;
