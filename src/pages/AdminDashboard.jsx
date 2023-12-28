import React, { useEffect, useState } from "react";
import TableAdmin from "../components/TableAdmin";
import getStatusOrder from "../api/getStatusOrder";

function AdminDashboard() {
  const [statusOrder, setStatusOrder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStatusOrder();
        setStatusOrder(response);
      } catch (error) {
        console.error("error fetching course:", error.message);
      }
    };
    fetchData();
  }, []);

  if (!statusOrder || statusOrder.length === 0) {
    return (
      <p
        style={{ color: `var(--primary-purple)`, fontWeight: "700" }}
        className="text-center"
      >
        Loading...
      </p>
    );
  }

  const data = statusOrder.map((order) => ({
    Username: order.username,
    Kategori: order.category,
    Kelas_Premium: order.title,
    Status: order.status,
    Metode_Pembayaran: order.paymentMethod,
    Tanggal_Bayar: order.paymentDate,
  }));

  return (
    <>
      <TableAdmin
        data={data}
        coloredColumn={{
          positive: "--allert-green",
          negative: "--allert-red",
          column: { key: "Status", value: ["SUDAH BAYAR", "BELUM BAYAR"] },
        }}
      />
    </>
  );
}

export default AdminDashboard;
