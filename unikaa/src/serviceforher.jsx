import React, { useState, useEffect } from "react";
import axios from "axios";
import "./serviceforher.css";
import Service from "./serviceforher/serviceforher1";
import Service1 from "./serviceforher/servicerforher2";
import Service2 from "./serviceforher/serviceforher3";
import Service3 from "./serviceforher/serviceforher4";
// import Image from "./serviceforher/image";

const HaircutList = () => {
  const [haircutData, setHaircutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "http://unikaabeauty.com/unikaabeautyacademy/costomers/read.php";

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
      <div>
        <br />
        <h1 className="header-hair-cut">Haircut List</h1>
        <table className="haircut-table">
          <thead>
            <tr>
              <th>Meet the Classics</th>
              <th>Regular Values</th>
              <th>Member Values</th>
            </tr>
          </thead>
          <tbody>
            {haircutData.map((item) => (
              <tr key={item.id}>
                <td>{item.meet_the_classics}</td>
                <td>{item.regular_values}</td>
                <td>{item.member_values}</td>
              </tr>
            ))}
            <tr style={{ borderWidth: "1px" }}>
              <td colSpan="3">
                <div className="tax-for-her">
                  <p>taxes are applicable</p>
                  <p>
                    price of service may vary between salons|certain service are
                    available only in select salons
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Service />
      <br />
      <Service1 />

      <br />
      <Service2 />

      <br />
      <Service3 />

      {/* <Image /> */}
    </>
  );
};

export default HaircutList;
