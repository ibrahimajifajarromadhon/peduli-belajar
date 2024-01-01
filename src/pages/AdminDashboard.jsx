import React, { useEffect, useState } from "react";
import TableAdmin from "../components/TableAdmin";
import getStatusOrder from "../api/getStatusOrder";
import { useNavigation } from "react-router";

function AdminDashboard({ filter }) {
  const [statusOrder, setStatusOrder] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStatusOrder();
        setStatusOrder(response);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);

  const filterCourses = () => {
    if (filter === "sudah-bayar") {
      return statusOrder.filter((course) => course.status === "SUDAH BAYAR");
    } else if (filter === "belum-bayar") {
      return statusOrder.filter((course) => course.status === "BELUM BAYAR");
    } else {
      return statusOrder;
    }
  };

  const filteredCourses = filterCourses();


  if (!statusOrder || statusOrder.length === 0) {
    return (
      <p
        style={{ color: "var(--primary-purple)", fontWeight: "700" }}
        className="text-center"
      >
        No Course found.
      </p>
    );
  }

  const data = filteredCourses.map((order) => ({
    Username: order.username,
    Kategori: order.category,
    Kelas_Premium: order.title,
    Status: order.status,
    Metode_Pembayaran: order.paymentMethod,
    Tanggal_Bayar: order.paymentDate,
  }));

      return (
        <>
          <div
            className="col-5"
            style={{
              marginTop: "-50px",
              marginLeft: "10px",
              fontFamily: "Montserrat",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            <h4
              style={{
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Status Pembayaran
            </h4>
          </div>
          <style>{`
          @media (max-width: 920px) {
            h4{
              display: none;
            }
            .col-5{
            }
          }
          `}</style>
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
