import React from "react";
import "./Input.css";

const Input = ({ placeholder, type, name, htmlFor, ...props }) => {
  return (
    <>
      <label htmlFor={htmlFor} className="inputLabel">
        {placeholder}
        <input type={type} name={name} className="inputContainer" {...props} />
      </label>
    </>
  );
};

export default Input;
