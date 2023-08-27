import React from "react";
import "./Modal.css";
import CloseButton from "../../assets/Icons/closeButton";

function Modal(props: {
  isVisible: boolean;
  onClose: Function;
  children: React.ReactNode;
}) {
  if (!props.isVisible) return null;
  return (
    <div className={"modal"} id="modal">
      <div
        className={"modalBody"}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <button className="modalClose" onClick={() => props.onClose()}>
          <CloseButton />
        </button>
        <div className="modalContent">{props.children}</div>
      </div>
    </div>
  );
}
export default Modal;
