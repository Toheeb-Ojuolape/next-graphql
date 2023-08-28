import PrimaryButton from "../Buttons/PrimaryButton";
import Input from "./Input";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { publicKeyTest } from "../../utils/textFormatter";

function EnterPubkeyForm() {
  const [pubkey, setPubKey] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    setLoading(true);
    try {
      await router.push(pubkey);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClick();
  };

  useEffect(() => {
    if (publicKeyTest(pubkey)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [pubkey]);

  return (
    <form data-testid="enter-pubkey-form" onSubmit={submitForm}>
      <Input
        placeholder={"Enter Public Key"}
        onChange={setPubKey}
        type={"text"}
      />
      <PrimaryButton
        disabled={disabled}
        onClick={handleClick}
        title={"Get started"}
        loading={loading}
      />
    </form>
  );
}

export default EnterPubkeyForm;
