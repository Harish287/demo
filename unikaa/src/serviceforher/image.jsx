// CustomerListComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerListComponent = () => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint.
    axios
      .get("https://unikaabeautyacademy.com/costomer_offer/read.php")
      .then((response) => {
        setCustomerList(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching customer list:", error);
      });
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <div className="customer-images">
        {customerList.map((customer) => (
          <img
            key={customer.id}
            src={`https://unikaabeautyacademy.com/images/${customer.image}`}
            alt={`Customer ${customer.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerListComponent;
