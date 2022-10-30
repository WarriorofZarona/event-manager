import React from "react";

export const Header = ({ style, children, ...props }) => {
  const resetCss = { padding: 0, margin: 0, textAlign: "center" };

  return (
    <h1 style={{ ...resetCss, style }} {...props}>
      {children}
    </h1>
  );
};
