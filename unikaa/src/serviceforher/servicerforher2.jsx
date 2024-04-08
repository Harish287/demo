import React, { useState, useEffect } from "react";
import axios from "axios";

const HaircutList = () => {
  const [haircutData, setHaircutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl =
    "https://unikaabeauty.com/unikaabeautyacademy/textture_api/read.php";

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
        <h1 className="header-hair-cut">Texture Matters</h1>
        <table className="haircut-table">
          <thead>
            <tr>
              <th>texture</th>
              <th>Regular Values</th>
              <th>Member Values</th>
            </tr>
          </thead>
          <tbody>
            {haircutData.map((item) => (
              <tr key={item.id}>
                <td>{item.content}</td>
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

      <br />
    </>
  );
};

export default HaircutList;
