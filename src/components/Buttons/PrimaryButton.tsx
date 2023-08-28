import React, { MouseEventHandler } from "react";
import ButtonLoading from "../Loader/ButtonLoading";

function PrimaryButton(props: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  title: string;
  loading:boolean
}) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.disabled ? "disabled btn" : "primaryBtn btn"}
    >
      {props.loading ? <ButtonLoading  data-testid="button-loading"/>:props.title}
    </button>
  );
}

export default PrimaryButton;
