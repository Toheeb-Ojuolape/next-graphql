import React from "react";


function Input(props: {
  placeholder: string;
  type: string;
  onChange: Function;
  width?:string
}) {
  return (
    <input
      width={props.width}
      onChange={(e) => props.onChange(e.target.value)}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
