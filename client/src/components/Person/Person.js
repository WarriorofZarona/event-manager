import React from "react";

export const Person = ({
  name,
  img,
  text,
  isHost = false,
  isAttending = false,
  ...props
}) => (
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
      style={{
        borderRadius: "50%",
        width: 150,
        height: 150,
        opacity: (isAttending || isHost) ? 1 : 0.5,
      }}
      src={img || "https://via.placeholder.com/150"}
      alt="avatar"
    />
    <h3 style={{ textAlign: "center" }}>{name}</h3>
    <h4 style={{ textAlign: "center" }}>{isHost ? "Host" : text}</h4>
  </div>
);
