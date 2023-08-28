import React from "react";
import Modal from "./Modal";
import EnterPubkeyForm from "../Forms/EnterPubkeyForm";

function EnterPubKey(props: {
  showModal: boolean;
  onClose: Function;
  title: string;
  description: string;
}) {
  return (
    <Modal isVisible={props.showModal} onClose={props.onClose}>
      <div className="enterPubKeyModal">
        <h2>{props.title}</h2>
        <p className="mb-2">{props.description}</p>
        <EnterPubkeyForm />
      </div>
    </Modal>
  );
}

export default EnterPubKey;
