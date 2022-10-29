import React from "react";

export const Attendant = ({ name, img, food, ...props }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img style={{ borderRadius: "50%" }} src={img} alt="avatar" />
    <h3 style={{ margin: 0, textAlign: "center" }}>{name}</h3>
    <h4 style={{ margin: 0, textAlign: "center" }}>
      Bringing {food.toLowerCase()}
    </h4>
  </div>
);
