import React from "react";

export const Subheader = ({ style, children, ...props }) => {
  const defaultCss = { padding: 0, margin: 0, textAlign: 'center' };

  return (
    <h2 style={{ ...defaultCss, style }} {...props}>
      {children}
    </h2>
  );
};
