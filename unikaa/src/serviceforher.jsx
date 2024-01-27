import React, { useState, useEffect } from "react";
import axios from "axios";
import "./serviceforher.css";

const HaircutList = () => {
  const [haircutData, setHaircutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://unikaabeautyacademy.com/costomers/read.php";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setHaircutData(response.data.data);
      } catch (error) {
        console.error("Error fetching haircut data:", error.message);
        // Handle error state
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
    <div>
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
        </tbody>
      </table>
    </div>
  );
};

export default HaircutList;
