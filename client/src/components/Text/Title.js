import React from "react";

export const Title = ({ style, textCenter, children, ...props }) => {

  return (
    <h1 style={{textAlign: textCenter ? 'center' : undefined}} {...props}>
      {children}
    </h1>
  );
};
