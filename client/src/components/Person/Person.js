import React from "react";

export const Person = ({ name, img, text, ...props }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
    {...props}
  >
    <img
      style={{ borderRadius: "50%", width: 150, height: 150 }}
      src={img || "https://via.placeholder.com/150"}
      alt="avatar"
    />
    <h3 style={{ margin: 0, textAlign: "center" }}>{name}</h3>
    <h4 style={{ margin: 0, textAlign: "center" }}>{text}</h4>
  </div>
);
