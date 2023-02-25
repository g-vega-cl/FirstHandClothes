import { Modal } from "antd";
import dummyStripe from "./dummy-stripe-only-pay.png";
import dummyStripeLarge from "./dummy-stripe-image-placeholder.png";

export const StripeDummyImageModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  let sourceimage = dummyStripe;
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (window.innerWidth > 1000) {
    sourceimage = dummyStripeLarge;
  }

  return (
    <>
      <Modal
        open={isModalOpen}
        closable={false}
        onOk={toggleModal}
        onCancel={toggleModal}
        width={"90vw"}
        style={{ height: "90vh" }}
      >
        <img src={sourceimage} height={"100%"} width={"100%"} />
      </Modal>
    </>
  );
};
