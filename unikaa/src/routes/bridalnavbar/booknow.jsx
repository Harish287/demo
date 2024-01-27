import React, { useState, useEffect } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://unikaabeautyacademy.com/view_contact.php "
        );
        const data = await response.json();
        setContacts(data); // Assuming the PHP script returns an array of contacts
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.Fname} {contact.Lname} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
