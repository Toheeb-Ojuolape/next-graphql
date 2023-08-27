import { useState } from "react";
import EnterPubKey from "@/components/Modal/EnterPubKey";
import HomeComponent from "@/components/Home/HomeComponent";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div id="main">
      <div className="home-container">
        <HomeComponent setShowModal={setShowModal} />
      </div>
      <EnterPubKey
        showModal={showModal}
        onClose={onClose}
        title={"Enter Public Key"}
        description={
          "You need to enter a valid lightning public key to fetch data"
        }
      />
    </div>
  );
}
