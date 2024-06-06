import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import Bridalnav from "./bridalnav.jsx";



const submit = () => {
  return (
    <>
    <Bridalnav/>
      {" "}
      <div class="position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded" style={{height:"250px", width:"600px"}}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <IoCheckmarkDoneCircleOutline style={{ width: "100px" }} />
        </div>
        <p style={{textAlign:"center"}}>Thank you! Your response has been submitted.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            boxSizing: "border-box",
          }}
        >
         <a href="/unikaaBridal"> <button style={{ padding: "8px 20px", borderRadius: "60px" }}>
            go back
          </button></a>
        </div>
      </div>
    </>
  );
};

export default submit;
