import React from "react";
import { SelectProps } from "@/interfaces/FormsInterface";

function Select(props: {
  options: Array<SelectProps>;
  placeholder: string;
  onChange: Function;
  defaultValue?: string;
}) {
  return (
    <select
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e.target.value)}
    >
      <option hidden value="">
        {" "}
        {props.placeholder}
      </option>
      {props.options.map((option: SelectProps, i: number) => (
        <option key={i} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
