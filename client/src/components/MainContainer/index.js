import React from "react";

const MainContainer = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 24,
    }}
  >
    {children}
  </div>
);

export default MainContainer;
