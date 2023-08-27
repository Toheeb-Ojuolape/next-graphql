import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../Forms/Input";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useEffect } from "react";
import { publicKeyTest } from "@/utils/textFormatter";
import { useRouter } from "next/router";

function EnterPubKey(props: {
  showModal: boolean;
  onClose: Function;
  title: string;
  description: string;
}) {
  const router = useRouter();
  const [pubkey, setPubKey] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    router
      .push(pubkey)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (publicKeyTest(pubkey)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [pubkey]);

  return (
    <Modal isVisible={props.showModal} onClose={props.onClose}>
      <div className="enterPubKeyModal">
        <h2>{props.title}</h2>
        <p className="mb-2">{props.description}</p>
        <Input
          placeholder={"Enter Public Key"}
          onChange={setPubKey}
          type={"text"}
        />
        <div>
          <PrimaryButton
            disabled={disabled}
            onClick={handleClick}
            title={"Get started"}
            loading={loading}
          />
        </div>
      </div>
    </Modal>
  );
}

export default EnterPubKey;
