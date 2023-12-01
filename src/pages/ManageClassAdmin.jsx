import React from "react";
import TableAdmin from "../components/TableAdmin";

function ManageClassAdmin() {
  const data = [
    {
      model: "Astro Cargo",
      model_year: "2001",
      vin: "3TBME4DC724E74501",
      make: "Chevrolet",
      tipe_kelas : "premium",
      level : "midlle",
    },
    {
      model: "Avenger",
      model_year: "2011",
      vin: "006A99YA94R344136",
      make: "Dodge",
      tipe_kelas : "premium",
      level : "midlle",
    },
    {
      model: "V70",
      model_year: "2003",
      vin: "8JBBDF446MLK89951",
      make: "Volvo",
      tipe_kelas : "premium",
      level : "midlle",
    },
    {
      model: "Insight",
      model_year: "2011",
      vin: "P0BRAC73CDUD65425",
      make: "Honda",
      tipe_kelas : "premium",
      level : "midlle",
    },
    {
      model: "Civic",
      model_year: "2001",
      vin: "6GWT0FH8T2SN72929",
      make: "Honda",
      tipe_kelas : "premium",
      level : "midlle",
    },
  ];

  return (
    <>
      <TableAdmin data={data} />
    </>
  );
}

export default ManageClassAdmin;
