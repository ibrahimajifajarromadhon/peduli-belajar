import React from "react";
import TableAdmin from "../components/TableAdmin";
import ModalAddClass from "../components/ModalAddClass";

function ManageClassAdmin() {
  const data = [
    {
      model: "Astro Cargo",
      model_year: "2001",
      vin: "3TBME4DC724E74501",
      make: "Chevrolet",
    },
    {
      model: "Avenger",
      model_year: "2011",
      vin: "006A99YA94R344136",
      make: "Dodge",
    },
    {
      model: "V70",
      model_year: "2003",
      vin: "8JBBDF446MLK89951",
      make: "Volvo",
    },
    {
      model: "Insight",
      model_year: "2011",
      vin: "P0BRAC73CDUD65425",
      make: "Honda",
    },
    {
      model: "Civic",
      model_year: "2001",
      vin: "6GWT0FH8T2SN72929",
      make: "Honda",
    },
    {
      model: "M-Class",
      model_year: "2012",
      vin: "A02X448VU58K62176",
      make: "Mercedes-Benz",
    },
    {
      model: "TITAN XD Single Cab",
      model_year: "2017",
      vin: "1N1W6W54A5XS24953",
      make: "Nissan",
    },
    {
      model: "Mercedes-AMG CLS",
      model_year: "2018",
      vin: "D4SYHPF0DSXM53264",
      make: "Mercedes-Benz",
    },
    {
      model: "Montero",
      model_year: "2004",
      vin: "HGV97DAL42HP07009",
      make: "Mitsubishi",
    },
    {
      model: "3 Series",
      model_year: "2001",
      vin: "CJ8LGX647UPE23960",
      make: "BMW",
    },
  ];
  
  return (
    <div>
      <div>
        <TableAdmin data={data} />
      </div>
    </div>
  );
}

export default ManageClassAdmin;
