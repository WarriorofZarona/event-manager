import React from 'react';

export const Avatar = ({src, size, opacity, ...props}) => (
    <img
    style={{
      borderRadius: "50%",
      width: size || 150,
      height: size || 150,
      opacity,
    }}
    src={src || "https://via.placeholder.com/150"}
    alt="avatar"
  />
)