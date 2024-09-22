import Modal from "react-modal";
import "./ImageModal.css";
Modal.setAppElement("#root");

export default function ImageModal({ picture, onClose }) {
  if (!picture) return null;

  return (
    <Modal
      isOpen={!!picture}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={true}
      shouldCloseOnOverlayClick={true}
    >
      <img
        src={picture.urls.regular}
        alt={picture.alt_description}
        className="modal-image"
      />
    </Modal>
  );
}
