import React from "react";

export const Subtitle = ({ style, textCenter, children, ...props }) => {

  return (
    <h2 style={{textAlign: textCenter ? 'center' : undefined}} {...props}>
      {children}
    </h2>
  );
};
