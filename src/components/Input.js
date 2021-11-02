import React from "react";

export const Input = (props) => {
  const {
    id,
    type = "text",
    value,
    onChange,
    label,
    required,
    maxLength,
  } = props;
  return (
    <div className="form__group">
      <label htmlFor={id}>{label}</label>
      <input
        required={required}
        name={id}
        type={type}
        maxLength={maxLength}
        className="form__group--edit"
        onChange={onChange}
        id={id}
        value={value}
      />
    </div>
  );
};
