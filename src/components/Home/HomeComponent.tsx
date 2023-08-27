import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

function HomeComponent(props: { setShowModal: Function }) {
  return (
    <div>
      <h2>Err, there's really nothing else do</h2>
      <p>
        To see the magic happen, click the button below to enter a valid public
        key and fetch some data!
      </p>

      <PrimaryButton
        loading={false}
        onClick={() => props.setShowModal(true)}
        disabled={false}
        title={"Enter Public Key"}
      ></PrimaryButton>
    </div>
  );
}

export default HomeComponent;
