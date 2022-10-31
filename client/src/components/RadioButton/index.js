import React from "react";

export const RadioButton = ({ onChange, id, isSelected, label, value }) => {

  return (
    <div className="RadioButton" style={{display: 'flex', gap: 8, alignItems: ''}}>
      <input
        id={id}
        onChange={onChange}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id} style={{fontSize: 24, fontWeight: 700}}>{label}</label>
    </div>
  );
};
