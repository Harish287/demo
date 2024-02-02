import React, { useState, useEffect } from "react";
import axios from "axios";

const HaircutList = () => {
  const [haircutData, setHaircutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://unikaabeautyacademy.com/hair_form_api/read.php";

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
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h1 className="header-hair-cut">Texture Matters and Hair Treatments</h1>
        <table className="haircut-table">
          <thead>
            <tr>
              <th>Facial Treatments</th>
              <th>Regular </th>
              <th>Member </th>
            </tr>
          </thead>
          <tbody>
            {haircutData.map((item) => (
              <tr key={item.id}>
                <td>{item.hair_form}</td>
                <td>{item.reguler_value}</td>
                <td>{item.member_value}</td>
              </tr>
            ))}
            <tr style={{ borderWidth: "1px" }}>
              <td style={{ color: "gray" }}>taxes are applicable</td> <td></td>
              <td style={{ color: "gray" }}>
                price of service may vary between salons|certain service are
                available only in select salons
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
    </>
  );
};

export default HaircutList;
