import React, { useEffect, useState } from "react";

const CustomerOfferList = () => {
  const [customerOffers, setCustomerOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://unikaabeautyacademy.com/costomer_offer/read.php"
        );
        const data = await response.json();

        if (data.status === 200) {
          setCustomerOffers(data.data);
          setLoading(false);
        } else {
          console.error("Failed to fetch customer offers");
        }
      } catch (error) {
        console.error("Error fetching customer offers:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {customerOffers.map((offer) => (
            <li key={offer.id}>
              <img
                src={`https://unikaabeautyacademy.com/costomer_offer/images/${offer.image}`}
                alt={`Offer ${offer.id}`}
              />
              <p>ID: {offer.id}</p>
              <p>Date: {offer.date}</p>
              <p>Title: {offer.title}</p>
              <p>Content: {offer.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerOfferList;
