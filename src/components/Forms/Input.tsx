import React from "react";
import "./Forms.css";

function Input(props: {
  placeholder: string;
  type: string;
  onChange: Function;
}) {
  return (
    <input
      onChange={(e) => props.onChange(e.target.value)}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
