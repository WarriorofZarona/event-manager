import React from "react";
import { Avatar } from "../Avatar";

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
    <Avatar
      src={img || "https://via.placeholder.com/150"}
      alt="avatar"
    />
    <h3 style={{ textAlign: "center" }}>{name}</h3>
    <h4 style={{ textAlign: "center" }}>{isHost ? "Host" : text}</h4>
  </div>
);
