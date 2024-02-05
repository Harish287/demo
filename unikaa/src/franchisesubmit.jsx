import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const submit = () => {
  return (
    <>
      <div style={{ height: "250px", width: "600px", margin: "120px auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <IoCheckmarkDoneCircleOutline style={{ width: "100px" }} />
        </div>
        <p style={{ textAlign: "center" }}>
          Thank you! Your response has been submitted.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            boxSizing: "border-box",
          }}
        >
          <a href="/franchise">
            {" "}
            <button style={{ padding: "8px 20px", borderRadius: "60px" }}>
              go back
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default submit;
