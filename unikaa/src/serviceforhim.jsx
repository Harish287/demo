import React, { useState, useEffect } from "react";
import axios from "axios";
import "./serviceforhim.css";
import Service from "./serviceforhim/serviceforhim1";
import Service1 from "./serviceforhim/serviceforhim2";
import Service2 from "./serviceforhim/serviceforhim3";
// import Service3 from "./serviceforhim/serviceforhim4";

const HaircutList = () => {
  const [haircutData, setHaircutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://unikaabeautyacademy.com/boys_color_api/read.php";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setHaircutData(response.data.data);
      } catch (error) {
        console.error("Error fetching haircut data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <>
     <Service />
      <div>
        <h1 className="header-hair-cut">World Of Colours</h1>
        <table className="haircut-table">
          <thead>
            <tr>
              <th>COLOURING & HIGHLIGHTS</th>
              <th>Regular Values</th>
              <th>Member Values</th>
            </tr>
          </thead>
          <tbody>
            {haircutData.map((item) => (
              <tr key={item.id}>
                <td>{item.colors_cut}</td>
                <td>{item.reguler_value}</td>
                <td>{item.member_value}</td>
              </tr>
            ))}
            <tr style={{ borderWidth: "1px" }}>taxes are applicable /price of service may vary between salons|certain service are
                available only in select salons
              {/* <td></td> <td></td>
              <td>
                price of service may vary between salons|certain service are
                available only in select salons
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
     
      <br />
      <Service1 />

      <br/><Service2/>

      <br />
      {/* <Service3/> */}
    </>
  );
};

export default HaircutList;
